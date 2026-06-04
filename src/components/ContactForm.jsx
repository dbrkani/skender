import { useState } from 'react'
import styles from './ContactForm.module.css'

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email address looks off.'
    }
    if (!form.message.trim()) next.message = 'Let us know how we can help.'
    return next
  }

  // ── Email submission lives here. Swap the body of this function for
  //    Formspree, Web3Forms, EmailJS, or your own endpoint later. ──
  const sendSubmission = async (data) => {
    // Placeholder: simulate a network request.
    // Example real version (Formspree):
    // return fetch('https://formspree.io/f/your-id', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //   body: JSON.stringify(data),
    // })
    return new Promise((resolve) => setTimeout(resolve, 900))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    try {
      await sendSubmission(form)
      setStatus('success')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <p className="eyebrow">Get in touch</p>
          <h2 className={styles.heading}>Let's talk about what's next</h2>
          <p className={styles.lead}>
            Tell us a little about your business and what you're working through.
            We'll get back to you within one business day.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Email</strong> contact@SkenderCorp.com</p>
            <p><strong>Phone</strong> (281) 330-8004</p>
          </div>
        </div>

        <div className={styles.formWrap}>
          {status === 'success' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h3>Thanks — we got your message.</h3>
              <p>We'll be in touch shortly.</p>
              <button
                className={styles.resetBtn}
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>
              <div className={styles.row}>
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <Field
                  label="Company (optional)"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? styles.invalid : ''}
                />
                {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
              </div>

              {status === 'error' && (
                <p className={styles.formError}>
                  Something went wrong sending your message. Please try again.
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, required }) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label}{required && <span className={styles.req}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={error ? styles.invalid : ''}
      />
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  )
}
