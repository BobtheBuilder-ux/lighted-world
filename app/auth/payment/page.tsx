'use client';

import { useState } from 'react';
import { Lightbulb, ArrowRight, CreditCard, Lock, CheckCircle, Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface FormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
  billingAddress: string;
  city: string;
  zipCode: string;
  country: string;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState<string>('premium');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'US'
  });
  const [isLoading, setIsLoading] = useState(false);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Foundation',
      price: 97,
      period: 'month',
      description: 'Perfect for getting started on your transformation journey',
      features: [
        'Access to basic courses',
        'Community forum access',
        'Monthly group calls',
        'Basic progress tracking',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Transformation',
      price: 197,
      period: 'month',
      description: 'Our most popular plan for serious transformation seekers',
      features: [
        'All Foundation features',
        'Premium course library',
        'Weekly 1-on-1 coaching calls',
        'Advanced assessments',
        'Priority support',
        'Exclusive workshops',
        'Personalized action plans'
      ],
      popular: true
    },
    {
      id: 'elite',
      name: 'Mastery',
      price: 497,
      period: 'month',
      description: 'Complete transformation with VIP support and access',
      features: [
        'All Transformation features',
        'Daily coaching access',
        'VIP community access',
        'Quarterly in-person retreats',
        'Personal transformation coach',
        'Custom curriculum design',
        'Lifetime access guarantee'
      ],
      popular: false
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 3000);
  };

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">LightedWorld</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Transformation Plan</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your journey and start transforming your life today
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Plan Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Plan</h2>
            <div className="space-y-4">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id 
                      ? 'ring-2 ring-amber-500 shadow-lg' 
                      : 'hover:shadow-md'
                  } ${plan.popular ? 'border-amber-200' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={selectedPlan === plan.id}
                            onChange={() => setSelectedPlan(plan.id)}
                            className="text-amber-600 focus:ring-amber-500"
                          />
                          <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                          {plan.popular && (
                            <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-3xl font-bold text-gray-900">${plan.price}</div>
                        <div className="text-gray-500">per {plan.period}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <Card className="shadow-xl border-0 sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Details</h3>
                
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Order Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {plans.find(p => p.id === selectedPlan)?.name} Plan
                      </span>
                      <span className="font-medium">
                        ${plans.find(p => p.id === selectedPlan)?.price}/month
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Setup fee</span>
                      <span className="line-through">$99</span>
                    </div>
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Setup fee discount</span>
                      <span>-$99</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total Today</span>
                      <span>${plans.find(p => p.id === selectedPlan)?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">
                    Payment Method
                  </Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'paypal')}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span>Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'paypal')}
                        className="text-amber-600 focus:ring-amber-500"
                      />
                      <div className="w-5 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        P
                      </div>
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>

                {/* Card Form */}
                {paymentMethod === 'card' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formatCardNumber(formData.cardNumber)}
                        onChange={(e) => handleInputChange({
                          target: { name: 'cardNumber', value: e.target.value }
                        })}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
                          Expiry Date
                        </Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={formatExpiryDate(formData.expiryDate)}
                          onChange={(e) => handleInputChange({
                            target: { name: 'expiryDate', value: e.target.value }
                          })}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardName" className="text-sm font-medium text-gray-700">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <>
                          <Lock className="mr-2 w-5 h-5" />
                          Complete Payment
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {/* PayPal */}
                {paymentMethod === 'paypal' && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                    }}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Continue with PayPal
                  </Button>
                )}

                {/* Security Notice */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">30-Day Money Back</h3>
            <p className="text-sm text-gray-600">Not satisfied? Get a full refund within 30 days.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">Your payment information is encrypted and secure.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Access</h3>
            <p className="text-sm text-gray-600">Start your transformation immediately after payment.</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link href="/auth/register" className="text-gray-500 hover:text-gray-700 text-sm">
            ← Back to Registration
          </Link>
        </div>
      </div>
    </div>
  );
}