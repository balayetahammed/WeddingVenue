import React from "react";
import "./contactUs.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      await addDoc(collection(db, "contacts"), data);
      alert("Message has been submitted.");
      reset();
    } catch (error) {
      alert("Error submitting message: " + error.message);
    }
  }

  return (
    <section className="contactUs-area">
      <div className="contactUs">
        <div className="left-content">
          <div className="content-title">
            <h4 className="font-boska">Contact us</h4>
            <p className="font-switzer">We are excited to get planning!</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="title font-switzer">Contact information</p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone no."
                {...register("number", {
                  required: "Phone number is required",
                })}
              />
              {errors.number && <p>{errors.number.message}</p>}
            </div>
            <p className="title font-switzer mt-4">Who’s getting married?</p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Partner 1"
                {...register("nameOne", {
                  required: "Partner 1 name is required",
                })}
              />
              {errors.nameOne && <p>{errors.nameOne.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Partner 2"
                {...register("nameTwo", {
                  required: "Partner 2 name is required",
                })}
              />
              {errors.nameTwo && <p>{errors.nameTwo.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="MM/YY"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && <p>{errors.date.message}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Expected number of guests"
                {...register("guestsNumber", {
                  required: "Guests number is required",
                })}
              />
              {errors.guestsNumber && <p>{errors.guestsNumber.message}</p>}
            </div>
            <div className="form-group">
              <textarea
                placeholder="Tell us anything more that can help!"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="send-btn font-switzer"
            >
              {isSubmitting ? "Submitting..." : "Send"}
            </button>
          </form>
        </div>
        <div className="right-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89547.08619199695!2d9.095331173302297!3d45.46282463093386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilan%2C%20Metropolitan%20City%20of%20Milan%2C%20Italy!5e0!3m2!1sen!2sbd!4v1743231723643!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h3 className="font-switzer">Head office</h3>
          <p className="font-switzer">
            Via Roma, 123, 20121 Milano (MI), Italy
          </p>
          <p className="font-switzer">Phone: +39 (0)322 221211</p>
          <p className="font-switzer mb-4">Mobile: +39 328 2211212</p>
          <h3 className="font-switzer mt-6">Follow us</h3>
          <div className="social-icons mt-2 justify-center 2xl:justify-start">
            <a href="#">
              <FaFacebook className="icons contactUs-icons" />
            </a>
            <a href="#">
              <FaInstagram className="icons contactUs-icons" />
            </a>
            <a href="#">
              <FaTwitter className="icons contactUs-icons" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
