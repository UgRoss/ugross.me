import React, { useState } from 'react';
import { useCookie } from 'react-use';
import axios, { AxiosRequestConfig } from 'axios';
import { serialize } from '~/utils';
import { Button } from '~/components/Button';
import { ContactSuccessAlert } from './ContactSuccessAlert';
import { ContactErrorAlert } from './ContactErrorAlert';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [contactFormCookie, updateContactFormCookie] = useCookie('contact-form');
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const name = e.currentTarget.contactName.value;
    const email = e.currentTarget.email.value;
    const message = e.currentTarget.message.value;

    const axiosReqConfig: AxiosRequestConfig = {
      url: e.currentTarget.action,
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: serialize({ name, email, message }),
    };

    try {
      await axios(axiosReqConfig);
      setError(false);
      updateContactFormCookie('submitted', { expires: 1 });
    } catch (_err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (contactFormCookie) {
    return <ContactSuccessAlert />;
  }

  return (
    <div>
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label htmlFor="contactName">
            <span className="label">Name</span>
            <br />
            <input
              id="contactName"
              type="text"
              name="contactName"
              placeholder="Name"
              minLength={2}
              maxLength={50}
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            <span className="label">Email</span>
            <br />
            <input type="email" name="email" placeholder="Email" required />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            <span className="label">Message</span>
            <textarea
              name="message"
              id="message"
              rows={7}
              required
              minLength={10}
              style={{ resize: 'none' }}
            />
          </label>
        </p>
        {error && <ContactErrorAlert />}
        <p>
          <Button type="submit" size="lg" disabled={loading} block>
            Send
          </Button>
        </p>
      </form>
    </div>
  );
};
