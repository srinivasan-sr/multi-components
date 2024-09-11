import { TextInput } from "../TextInput";
import { useState } from "react";
import {
  WEAK,
  MODERATE,
  STRONG,
  NO_STRENGTH,
  CHECK_YOUR_PASSWORD_STRENGTH,
  ENTER_YOUR_PASSWORD,
} from "../../constants/textconstants";
export default function PasswordStrength() {
  const [strength, setStrength] = useState(0);

  const calculateStrength = (password: string) => {
    let score = 0;
    if (password.length > 8) {
      score += 2;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/[a-z]/.test(password)) {
      score += 1;
    }
    if (/\d/.test(password)) {
      score += 1;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      score += 1;
    }
    setStrength(score);
  };
  const getStrengthLabel = () => {
    if (strength === 0) return NO_STRENGTH;
    if (strength < 3) return WEAK;
    if (strength < 6) return MODERATE;
    return STRONG;
  };
  const getMeterColor = () => {
    if (strength === 0) return `w-0 bg-transparent`;
    if (strength < 3) return `w-12 bg-red-500`;
    if (strength < 6) return `w-24 bg-orange-500`;
    return `w-36 bg-green-500`;
  };

  const handlePasswordChange = (value: string) => {
    calculateStrength(value);
  };

  return (
    <>
      <section className="flex ml-2 mt-2">
        <label htmlFor="pass-strength">{CHECK_YOUR_PASSWORD_STRENGTH}</label>
        <br />
        <TextInput
          id="pass-strength"
          type="password"
          placeholder={ENTER_YOUR_PASSWORD}
          defaultValue=""
          classes={`border p-1 ml-1`}
          onChangeHandler={handlePasswordChange}
        />
        <div
          className="w-36 h-4 rounded ml-2 bg-gray-500"
          id="strength-meter"
          title={getStrengthLabel()}
        >
          <div
            className={`h-4 rounded ${getMeterColor()}`}
            id="strength-meter-inner"
            title={getStrengthLabel()}
          ></div>
        </div>
      </section>
    </>
  );
}
