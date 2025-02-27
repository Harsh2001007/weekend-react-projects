import { useActionState } from "react";
import {
  isEqualToOtherValue,
  isEmail,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";

export default function Signup() {
  const signupHandler = (prevFormData, formData) => {
    const email = formData.get("email");
    const pass = formData.get("password");
    const confirmPass = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const acquisition = formData.getAll("acquisition");
    const terms = formData.get("terms");

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Invalid email address.");
    }

    if (!isNotEmpty(pass) || !hasMinLength(pass, 6)) {
      errors.push("You must provide a password of minimum 6 length. ");
    }

    if (!isEqualToOtherValue(pass, confirmPass)) {
      errors.push("password does not match");
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push("Please provide your first and last name");
    }

    if (!isNotEmpty(role)) {
      errors.push("Please select a role");
    }

    if (!terms) {
      errors.push("please confirm terms");
    }

    if (acquisition.length === 0) {
      errors.push("please select atlease one acquisition channel");
    }

    if (errors.length > 0) {
      return { errors };
    }

    return { errors: null };
  };

  const [formState, formAction] = useActionState(signupHandler, {
    errors: null,
  });

  return (
    <form onSubmit={signupHandler}>
      <h2>Welcome on board! plz fill the form</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <div>
        {formState.errors && (
          <ul className="error">
            {formState.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
