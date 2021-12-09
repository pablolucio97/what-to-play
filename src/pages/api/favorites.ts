import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../services/mongo";
import { getSession } from "next-auth/client";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { dbConnect } = await connectDb();

  switch (req.method) {
    case "POST":
      try {
        const session = await getSession({ req });
        const { user } = session;
        const email = user.email;


        const { dbConnect } = await connectDb();

        const {
          id,
          title,
          thumbnail,
          freetogame_profile_url,
          short_description,
        } = req.body;
        const hasFavorite = await dbConnect
          .collection("users")
          .findOne({ favorites: { id } });
        res.json({ error: "Game already exists in your lib." });
        if (!hasFavorite) {
          const response = await dbConnect.collection("users").updateOne(
            { email: email },
            {
              $push: {
                favorites: {
                  id,
                  title,
                  thumbnail,
                  freetogame_profile_url,
                  short_description,
                },
                upsert: true,
              },
            }
          );
          res.status(200).json({ success: true, data: response });
        }
      } catch (error) {
        console.error(error);
      }
      break;
    case "GET":
      try {
        const session = await getSession({ req });
        const favorites = await dbConnect
          .collection("users")
          .findOne({ email: session.user.email });
        res.status(200).json({ favorites });
      } catch (error) {
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const { id } = req.body;
        const session = await getSession({ req });
        const deletedFavorite = await dbConnect.collection("users").updateOne(
          { email: session.user.email },
          {
            $pull: {
              favorites: { id },
            },
          }
        );
        res.status(200).json(deletedFavorite);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
  }
};
