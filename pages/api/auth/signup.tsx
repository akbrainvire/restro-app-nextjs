import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import supabase from "../../../app/config/supabaseClient";
import bcrypt from "bcrypt";
import * as jose from "jose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, phone, country, password } = req.body;
  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number is invalid",
    },
    {
      valid: validator.isLength(country, { min: 1 }),
      errorMessage: "Country is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.errorMessage);
    }
  });

  if (errors.length) {
    return res.status(400).json({ errorMessage: errors[0] });
  }

  const userWithEmail = await supabase
    .from("users")
    .select("*")
    .eq("email", `${email}`);

  if (!userWithEmail?.data?.length) {
    console.log("error");
    return res
      .status(400)
      .json({ errorMessage: "Email is associated with another account" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("cities").insert([
    {
      first_name: firstName,
      last_name: lastName,
      phone,
      country: country,
      password: hashedPassword,
      email,
    },
  ]);

  const user: any = data;
  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({
    email: user?.email,
  })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  if (req.method === "POST") {
    res.status(200).json({
      jwt: token,
    });
  }
}
