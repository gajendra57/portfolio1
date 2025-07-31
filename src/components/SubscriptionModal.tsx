import React, { useState } from 'react';
import { X, Check, Star, CreditCard, Smartphone, Building, Info } from 'lucide-react';
import Logo from './Logo';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const subscriptionPlans = [
  {
    id: 'starter',
    name: 'Startup Saviour',
    price: { monthly: 99, yearly: 999, lifetime: 4999 },
    description: 'Perfect for early-stage startups seeking guidance',
    features: [
      '24/7 Chat Support',
      '1 Mentor Session/Month',
      'Basic Business Analysis',
      'Email Support',
      'Community Access',
      'Resource Library'
    ],
    color: 'emerald',
    popular: false
  },
  {
    id: 'growth',
    name: 'Growth Accelerator',
    price: { monthly: 199, yearly: 1999, lifetime: 9999 },
    description: 'For growing startups ready to scale',
    features: [
      'Everything in Starter',
      '4 Mentor Sessions/Month',
      'Advanced Analytics',
      'Priority Support',
      'Custom Strategy Reports',
      'Investor Pitch Deck Review',
      'Financial Planning Tools'
    ],
    color: 'blue',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Shield',
    price: { monthly: 399, yearly: 3999, lifetime: 19999 },
    description: 'Comprehensive protection for established businesses',
    features: [
      'Everything in Growth',
      'Unlimited Mentor Sessions',
      'Dedicated Account Manager',
      'Crisis Management Support',
      'Legal Consultation',
      'Partnership Opportunities',
      'Custom Integration',
      'White-label Solutions'
    ],
    color: 'purple',
    popular: false
  }
];

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('growth');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly' | 'lifetime'>('yearly');
  const [step, setStep] = useState<'plans' | 'details' | 'payment' | 'success'>('plans');
  const [showDetails, setShowDetails] = useState<string | null>(null);
  
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    businessType: '',
    teamSize: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');

  if (!isOpen) return null;

  const getCurrentPlan = () => {
    return subscriptionPlans.find(plan => plan.id === selectedPlan) || subscriptionPlans[1];
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const resetModal = () => {
    setStep('plans');
    setSelectedPlan('growth');
    setBillingCycle('yearly');
    setCustomerDetails({
      firstName: '', lastName: '', email: '', phone: '', company: '',
      address: '', city: '', state: '', country: '', zipCode: '',
      businessType: '', teamSize: ''
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Logo size="sm" showText={false} />
            <h2 className="text-2xl font-bold text-gray-900">
              {step === 'plans' && 'Choose Your Protection Plan'}
              {step === 'details' && 'Customer Details'}
              {step === 'payment' && 'Payment Gateway'}
              {step === 'success' && 'Payment Successful!'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 'plans' && (
          <div className="p-6">
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-xl p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    billingCycle === 'monthly' ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Yearly <span className="text-emerald-600 text-sm font-bold ml-1">Save 20%</span>
                </button>
                <button
                  onClick={() => setBillingCycle('lifetime')}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    billingCycle === 'lifetime' ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'
                  }`}
                >
                  Lifetime <span className="text-purple-600 text-sm font-bold ml-1">Best Value</span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                    selectedPlan === plan.id 
                      ? `border-${plan.color}-500 shadow-lg scale-105` 
                      : 'border-gray-200 hover:border-gray-300'
                  } ${plan.popular ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold text-${plan.color}-600 mb-2`}>{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ₹{plan.price[billingCycle].toLocaleString()}
                      {billingCycle !== 'lifetime' && <span className="text-lg font-normal text-gray-500">/{billingCycle.slice(0, -2)}</span>}
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className={`w-5 h-5 text-${plan.color}-500 mr-3 flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetails(showDetails === plan.id ? null : plan.id);
                    }}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Info className="w-4 h-4 text-gray-500" />
                  </button>

                  {showDetails === plan.id && (
                    <div className="absolute inset-0 bg-white rounded-2xl p-6 border-2 border-blue-500 shadow-2xl z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900">Plan Details</h4>
                        <button onClick={() => setShowDetails(null)}>
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• Instant setup within 24 hours</p>
                        <p>• Cancel anytime with full refund policy</p>
                        <p>• Dedicated onboarding specialist</p>
                        <p>• 99.9% uptime guarantee</p>
                        <p>• Secure payment processing</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep('details')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Continue with {getCurrentPlan().name}
              </button>
            </div>
          </div>
        )}

        {step === 'details' && (
          <div className="p-6">
            <form onSubmit={handleDetailsSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.firstName}
                    onChange={(e) => setCustomerDetails({...customerDetails, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.lastName}
                    onChange={(e) => setCustomerDetails({...customerDetails, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={customerDetails.email}
                    onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Startup Name *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.company}
                    onChange={(e) => setCustomerDetails({...customerDetails, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <select
                    value={customerDetails.businessType}
                    onChange={(e) => setCustomerDetails({...customerDetails, businessType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select business type</option>
                    <option value="saas">SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="fintech">FinTech</option>
                    <option value="healthtech">HealthTech</option>
                    <option value="edtech">EdTech</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({...customerDetails, address: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Street address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.city}
                    onChange={(e) => setCustomerDetails({...customerDetails, city: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.state}
                    onChange={(e) => setCustomerDetails({...customerDetails, state: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.country}
                    onChange={(e) => setCustomerDetails({...customerDetails, country: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    required
                    value={customerDetails.zipCode}
                    onChange={(e) => setCustomerDetails({...customerDetails, zipCode: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep('plans')}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Plans
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'payment' && (
          <div className="p-6">
            <div className="max-w-2xl mx-auto">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">{getCurrentPlan().name} - {billingCycle}</span>
                  <span className="font-semibold">₹{getCurrentPlan().price[billingCycle].toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span className="font-semibold">₹{Math.round(getCurrentPlan().price[billingCycle] * 0.18).toLocaleString()}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount</span>
                  <span>₹{Math.round(getCurrentPlan().price[billingCycle] * 1.18).toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                      paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm font-semibold">Credit/Debit Card</div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                      paymentMethod === 'upi' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Smartphone className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm font-semibold">UPI Payment</div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                      paymentMethod === 'netbanking' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Building className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <div className="text-sm font-semibold">Net Banking</div>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                    <input
                      type="text"
                      placeholder="example@paytm"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Bank</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                      <option value="">Choose your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="other">Other Banks</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={() => setStep('details')}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Details
                </button>
                <button
                  onClick={handlePayment}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Pay ₹{Math.round(getCurrentPlan().price[billingCycle] * 1.18).toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="p-6 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">
                Congratulations! Your subscription to {getCurrentPlan().name} has been activated successfully.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plan:</span>
                    <span className="font-semibold">{getCurrentPlan().name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Billing:</span>
                    <span className="font-semibold">{billingCycle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold">₹{Math.round(getCurrentPlan().price[billingCycle] * 1.18).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleClose}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={handleClose}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionModal;