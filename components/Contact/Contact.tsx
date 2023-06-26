import { useState } from "react";

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make an API request to send the form data
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission
        setIsEmailSent(true); // Set the email sent status
      } else {
        // Handle submission error
        console.error("Error sending email.");
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id='contact'
      className='py-[120px]'
    >
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div className='max-w-[600px] mx-auto text-center mb-[50px]'>
              <span className='font-semibold text-lg text-primary block mb-2'>
                Contact With Me
              </span>
              <h2 className='font-bold text-black text-3xl sm:text-4xl md:text-[45px] mb-5'>
                Have an Project in Mind?
              </h2>
              <p className='font-medium text-lg text-body-color'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center -mx-4'>
          <div className='w-full lg:w-9/12 px-4'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='mb-6'>
                    <input
                      type='text'
                      placeholder='Enter your name'
                      className='input-field text-black'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='mb-6'>
                    <input
                      type='text'
                      placeholder='Company (Optional)'
                      className='input-field text-black'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='mb-6'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='input-field text-black'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                  <div className='mb-6'>
                    <input
                      type='text'
                      placeholder='Phone number'
                      className='input-field text-black'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className='w-full px-4'>
                  <div className='mb-6'>
                    <textarea
                      rows={4}
                      placeholder='Tell me about your project'
                      className='input-field text-black resize-none'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className='w-full px-4'>
                  <div className='pt-4 text-center'>
                    {isEmailSent ? (
                      <p className='text-green-500'>Email sent successfully!</p>
                    ) : (
                      <button
                        type='submit'
                        className='inline-flex justify-center items-center py-4 px-9 rounded-full font-semibold text-white bg-primary mx-auto transition duration-300 ease-in-out hover:shadow-signUp hover:bg-opacity-90'
                      >
                        Contact Me
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
