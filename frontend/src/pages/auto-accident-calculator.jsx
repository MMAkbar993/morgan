import React, { useMemo, useState } from 'react';

function composeClasses(...classes) {
  return classes.filter(Boolean).join(' ');
}

const STEP_DEFINITIONS = [
  {
    id: 'when',
    label: 'When did this accident happen?',
    type: 'choice',
    field: 'when',
    disqualifyMessage: 'Sorry, we can only help with accidents that happened less than a year ago.',
    options: [
      { label: 'In the past month', value: 'within_1_month' },
      { label: '1 to 3 months ago', value: 'within_3_months' },
      { label: '4 to 6 months ago', value: 'within_6_months' },
      { label: 'Within the last year', value: 'within_year' },
      { label: 'Over a year ago', value: 'over_year', disqualify: true },
    ],
  },
  {
    id: 'who',
    label: 'Who was involved in the accident?',
    type: 'choice',
    field: 'who',
    disqualifyMessage: 'Sorry, we can only help with accidents that involved another driver or vehicle.',
    options: [
      { label: 'Another driver in a regular car', value: 'other_driver' },
      { label: 'Multiple drivers (multi-car accident)', value: 'multi_driver' },
      { label: 'A commercial truck or big rig', value: 'commercial_truck' },
      { label: 'A rideshare or delivery driver', value: 'rideshare_driver' },
      { label: 'Only me - I crashed alone', value: 'single_driver', disqualify: true },
    ],
  },
  {
    id: 'medical',
    label: 'Did you require medical help?',
    type: 'choice',
    field: 'medical',
    disqualifyMessage: 'Sorry, we can only help with injury cases — we’re glad you’re okay, though!',
    options: [
      { label: 'Yes, I went to the emergency room', value: 'er' },
      { label: 'Yes, I went to urgent care or a clinic', value: 'urgent_care' },
      { label: 'Yes, I saw a doctor or specialist', value: 'doctor' },
      { label: 'No, but I was hurt', value: 'hurt' },
      { label: 'No, I wasn’t injured', value: 'no_injury', disqualify: true },
    ],
  },
  {
    id: 'fault',
    label: 'Who was at fault for the accident?',
    type: 'choice',
    field: 'fault',
    disqualifyMessage: 'Sorry, we can only help with situations where another driver was responsible.',
    options: [
      { label: 'It was the other driver’s fault', value: 'other_driver' },
      { label: 'We were both at fault', value: 'shared_fault' },
      { label: 'I don’t know who was at fault', value: 'unknown_fault' },
      { label: 'It was my fault', value: 'self_fault', disqualify: true },
    ],
  },
  {
    id: 'lawyer',
    label: 'Is an attorney already handling your case?',
    type: 'choice',
    field: 'lawyer',
    disqualifyMessage: 'Sorry, we can only help if you’re not already working with an attorney.',
    options: [
      { label: "No, I don't have a lawyer", value: 'no_lawyer' },
      { label: "Yes, but I'm thinking about switching", value: 'considering_switch' },
      { label: 'Yes, I already have a lawyer', value: 'have_lawyer', disqualify: true },
    ],
  },
  {
    id: 'details',
    type: 'details',
    field: ['details', 'state'],
    label: 'Can you quickly explain what happened?',
    helper:
      'This information will help our AI match you with similar successful cases to give a better estimated payout.',
  },
  {
    id: 'contact',
    type: 'contact',
    field: ['firstName', 'lastName', 'email'],
    label: 'You qualify! Let’s calculate your compensation!',
    helper: "What's your name?",
  },
  {
    id: 'phone',
    type: 'phone',
    field: ['phone', 'consent'],
    label: 'Final Step!',
    helper: 'To help confirm you’re not a robot, we ask for you to submit a valid phone number.',
  },
];

const STATE_OPTIONS = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const INITIAL_FORM_STATE = {
  when: '',
  who: '',
  medical: '',
  fault: '',
  lawyer: '',
  details: '',
  state: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  consent: false,
};

export default function AutoAccidentCalculator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [activeMessage, setActiveMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);

  const currentStep = STEP_DEFINITIONS[currentStepIndex];
  const totalSteps = STEP_DEFINITIONS.length;
  const stepPositionLabel = `${currentStepIndex + 1} of ${totalSteps}`;

  const handleOptionSelect = (field, option) => {
    setFormState((prev) => ({
      ...prev,
      [field]: option.value,
    }));
    setActiveMessage(option.disqualify ? currentStep.disqualifyMessage : '');
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (activeMessage) {
      setActiveMessage('');
    }
  };

  const canProceed = useMemo(() => {
    if (activeMessage) {
      return false;
    }

    switch (currentStep.type) {
      case 'choice':
        return Boolean(formState[currentStep.field]);
      case 'details':
        return Boolean(formState.details?.trim()) && Boolean(formState.state);
      case 'contact':
        return (
          Boolean(formState.firstName?.trim()) &&
          Boolean(formState.lastName?.trim()) &&
          Boolean(formState.email?.trim())
        );
      case 'phone':
        return Boolean(formState.phone?.trim()) && formState.consent;
      default:
        return true;
    }
  }, [activeMessage, currentStep, formState]);

  const goToNextStep = () => {
    if (!canProceed || currentStepIndex >= totalSteps - 1) {
      return;
    }
    setCurrentStepIndex((prev) => prev + 1);
    setActiveMessage('');
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
    setActiveMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canProceed) {
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmissionComplete(true);
    }, 1100);
  };

  const renderChoices = () => (
    <div className="space-y-3">
      {currentStep.options.map((option) => {
        const isSelected = formState[currentStep.field] === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleOptionSelect(currentStep.field, option)}
            className={composeClasses(
              'w-full rounded-lg border border-white/20 px-4 py-3 text-left text-base font-semibold transition',
              isSelected ? 'bg-[#1149bc]/40 text-white shadow-lg ring-2 ring-[#55c7d0]' : 'bg-white/5 text-white hover:bg-white/10',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );

  const renderDetails = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="details" className="block text-lg font-semibold text-[#feb602]">
          {currentStep.label}
        </label>
        <p className="mt-2 text-sm text-white/80">{currentStep.helper}</p>
        <textarea
          id="details"
          name="details"
          value={formState.details}
          onChange={handleInputChange}
          placeholder="Example: I was driving through an intersection when a drunk driver hit me from the side."
          className="mt-4 w-full rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
          rows={4}
          maxLength={5000}
        />
      </div>
      <div>
        <label htmlFor="state" className="block text-lg font-semibold text-[#feb602]">
          In what state did it take place?
        </label>
        <select
          id="state"
          name="state"
          value={formState.state}
          onChange={handleInputChange}
          className="mt-3 w-full rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-base text-white focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
        >
          <option value="">Select one...</option>
          {STATE_OPTIONS.map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-semibold text-[#55c7d0]">You qualify! Let’s calculate your compensation!</p>
      </div>
      <div>
        <label htmlFor="firstName" className="block text-lg font-semibold text-[#feb602]">
          What&apos;s your name?
        </label>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
            className="rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-[#feb602]">
          What&apos;s your email address?
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          placeholder="you@domain.com"
          className="mt-3 rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
        />
      </div>
      <p className="text-sm text-white/80">
        Our team will quickly analyze your case and send you an estimate of what your settlement could look like. It&apos;s
        fast, free, and comes with no obligation.
      </p>
    </div>
  );

  const renderPhone = () => (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-semibold text-[#55c7d0]">Final Step!</p>
        <p className="mt-2 text-sm text-white/80">
          To help confirm you’re not a robot, we ask for you to submit a valid phone number.
        </p>
      </div>
      <div>
        <label htmlFor="phone" className="block text-lg font-semibold text-[#feb602]">
          What&apos;s your phone number?
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleInputChange}
          placeholder="(000) 000-0000"
          className="mt-3 rounded-lg border border-[#1149bc] bg-[#0f2f67]/40 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#55c7d0] focus:outline-none focus:ring-2 focus:ring-[#55c7d0]"
        />
      </div>
      <div className="flex items-start gap-3 text-sm text-white/80">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={formState.consent}
          onChange={handleInputChange}
          className="mt-1 h-5 w-5 rounded border-white/40 bg-transparent text-[#55c7d0] focus:ring-[#55c7d0]"
        />
        <label htmlFor="consent">
          Your phone number helps us verify you&apos;re a real person, not a bot. By submitting, you agree to the Case
          Connect terms and privacy policy, consent to be contacted using automated technology, and acknowledge results are
          not guaranteed.
        </label>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep.type) {
      case 'choice':
        return (
          <div className="space-y-6">
            <p className="text-base font-semibold text-[#feb602]">{currentStep.label}</p>
            {renderChoices()}
          </div>
        );
      case 'details':
        return renderDetails();
      case 'contact':
        return renderContact();
      case 'phone':
        return renderPhone();
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#031339] via-[#0a2c70] to-[#1645a3] py-16 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-2 text-[#55c7d0]">
              <span className="inline-block rounded-full bg-[#55c7d0]/20 px-3 py-1 text-sm font-semibold tracking-wide uppercase">
                Get the max auto accident payout
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                  Auto Accident Payout Calculator
                </h1>
              </div>
              <p className="text-lg text-white/80">
                Our calculator uses secrets from thousands of accident payouts to show what your case could be worth before
                hiring an accident attorney. If you qualify, most people get up to 60% more and you&apos;ll never pay out
                of pocket.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm uppercase tracking-widest text-white/60">As featured on</span>
                <div className="flex flex-wrap items-center gap-3 text-white/70">
                  {['ABC', 'CNN', 'FOX', 'CBS', 'NBC'].map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-wide"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 text-xs text-white/60">
              Questions? Answers © {new Date().getFullYear()} Case Connect, LLC. Terms &amp; Disclosure: Our qualification
              tool is designed to give a general idea of whether you may qualify for compensation, based solely on the
              information you provide. This does not constitute legal advice or a guarantee of results. Individual results
              vary. By submitting, you consent to contact from Case Connect and our partners by phone, text, and email. No
              attorney-client relationship is formed unless a formal agreement is signed with a law firm.
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            {submissionComplete ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="rounded-full bg-[#55c7d0]/20 p-4 text-[#55c7d0]">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold">One moment please...</h2>
                <p className="text-base text-white/80">
                  We&apos;re reviewing your answers. A Case Connect specialist will reach out shortly with your estimated
                  payout details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex h-full flex-col">
                <header className="mb-6">
                  <div className="text-sm font-semibold uppercase tracking-widest text-white/70">Step {stepPositionLabel}</div>
                </header>

                  <div className="flex-1 space-y-6">{renderStepContent()}</div>

                {activeMessage && (
                  <p className="mt-6 rounded-lg bg-red-600/10 px-4 py-3 text-sm font-semibold text-red-200">
                    {activeMessage}
                  </p>
                )}

                <footer className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  {currentStepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={goToPreviousStep}
                      className="rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
                    >
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {currentStep.type === 'phone' ? (
                    <button
                      type="submit"
                      disabled={!canProceed || submitting}
                      className={composeClasses(
                        'rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0a2043] transition',
                        canProceed && !submitting
                          ? 'bg-[#feb602] hover:bg-[#ffd24b]'
                          : 'bg-[#feb602]/40 text-[#0a2043]/60 cursor-not-allowed',
                      )}
                    >
                      {submitting ? 'Please wait...' : 'Calculate ➔'}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={goToNextStep}
                      disabled={!canProceed}
                      className={composeClasses(
                        'rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0a2043] transition',
                        canProceed
                          ? 'bg-[#feb602] hover:bg-[#ffd24b]'
                          : 'bg-[#feb602]/40 text-[#0a2043]/60 cursor-not-allowed',
                      )}
                    >
                      Next ➔
                    </button>
                  )}
                </footer>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


