import { NextApiRequest, NextApiResponse } from "next";

import jwt from "jsonwebtoken";
import supabase from "../../../app/config/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, first_name, last_name, email, city, phone")
    .eq("email", `${payload.email}`);

  const user: any = data;

  if (!user.length) {
    return res.status(401).json({
      errorMessage: "User not found",
    });
  }

  return res.json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    city: user.city,
  });
}
