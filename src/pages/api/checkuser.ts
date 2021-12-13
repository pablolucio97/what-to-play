import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import connectDb from "../../services/mongo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { dbConnect } = await connectDb();
    const session = await getSession({ req });
    if (req.method === "GET") {
      const { user } = session;
      const email = user.email;
      const name = user.name;
      const hasUser = await dbConnect.collection("users").findOne({ email });
      if (!hasUser) {
        const newUser = await dbConnect.collection("users").insertOne({
          email,
          name,
        });
      } else {
        await hasUser.findOne({ email });
      }
    } else {
      console.log("Method not supported");
    }
  } catch (error) {
    console.log(error);
  }
};
