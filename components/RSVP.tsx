import React, { useState } from 'react';
import Section from './Section';
import { RSVP_SHEET_API_URL } from '../constants';

const RSVP: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone || !attending) {
            setError('Please fill in all required fields.');
            return;
        }
        setError('');
        setIsLoading(true);

        if (!RSVP_SHEET_API_URL || RSVP_SHEET_API_URL.includes("YOUR_API_ID_HERE")) {
            setError("RSVP functionality is not configured. Please contact the site administrator.");
            setIsLoading(false);
            return;
        }

        try {
            // 1. Check if email already exists
            const checkResponse = await fetch(`${RSVP_SHEET_API_URL}/search?email=${encodeURIComponent(email)}`);
            if (checkResponse.ok) {
                const existingEntries = await checkResponse.json();
                if (existingEntries.length > 0) {
                    setError('It looks like you have already RSVP\'d with this email address. Thank you!');
                    setIsLoading(false);
                    return;
                }
            } else {
                console.warn("Could not check for duplicate email. Proceeding with submission.");
            }

            // 2. Submit new RSVP data
            const submissionData = {
                name,
                email,
                phone,
                attending,
                guests: attending === 'yes' ? 1 : 0,
                timestamp: new Date().toISOString(),
            };

            const submitResponse = await fetch(RSVP_SHEET_API_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionData)
            });

            if (!submitResponse.ok) {
                const errData = await submitResponse.json();
                throw new Error(errData.error || 'There was a problem submitting your RSVP.');
            }

            setSubmitted(true);

        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
    
    if (submitted) {
        return (
            <Section id="rsvp" title="Thank You!">
                <div className="max-w-lg mx-auto bg-white/60 p-10 rounded-lg shadow-xl backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-[#4B3F3C]">We have received your RSVP.</h3>
                    <p className="mt-4 text-gray-700">We can't wait to celebrate with you!</p>
                </div>
            </Section>
        );
    }

    return (
        <Section id="rsvp" title="Will You Join Us?">
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
                Please let us know if you can join our celebration by November 22nd, 2025.
            </p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/60 p-8 rounded-lg shadow-xl backdrop-blur-sm text-left space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-[#B48A6E] focus:border-[#B48A6E]" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-[#B48A6E] focus:border-[#B48A6E]" required />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-[#B48A6E] focus:border-[#B48A6E]" required />
                </div>
                <div>
                    <span className="block text-sm font-bold text-gray-700 mb-2">Will you be attending?</span>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="attending" value="yes" checked={attending === 'yes'} onChange={() => setAttending('yes')} className="form-radio text-[#B48A6E] focus:ring-[#B48A6E]"/>
                            <span className="ml-2">Yes, with pleasure!</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="attending" value="no" checked={attending === 'no'} onChange={() => setAttending('no')} className="form-radio text-[#B48A6E] focus:ring-[#B48A6E]"/>
                            <span className="ml-2">Regretfully decline</span>
                        </label>
                    </div>
                </div>
                 {attending === 'yes' && (
                    <div>
                        <label htmlFor="guests" className="block text-sm font-bold text-gray-700 mb-1">Number of Guests (including yourself)</label>
                        <div id="guests" className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700">
                            1
                        </div>
                    </div>
                )}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <div className="text-center pt-4">
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="bg-[#B48A6E] text-white font-bold py-3 px-8 rounded-full hover:bg-[#a57b60] transition-colors duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed w-full md:w-auto"
                    >
                        {isLoading ? 'Submitting...' : 'Submit RSVP'}
                    </button>
                </div>
            </form>
        </Section>
    );
};

export default RSVP;