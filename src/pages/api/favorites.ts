import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../services/mongo";

import connectToDatabase from "../../services/mongo";

connectToDatabase();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { db } = await connectDb();

  switch (req.method) {
    case "POST":
      try {
        const { id, title, thumbnail, freetogame_profile_url } = req.body;
        const response = await db.collection("favorites").insertOne({
          id,
          title,
          freetogame_profile_url,
          thumbnail,
        });
        res.status(200).json({ success: true, data: response });
      } catch (error) {
        console.error(error);
      }
      break;
    case "GET":
      try {
        const favorites = await db.collection("favorites").find().toArray();
        res.status(200).json({ favorites });
      } catch (error) {
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const { id } = req.body;
        const deletedFavorite = await db
          .collection("favorites")
          .findOneAndDelete({ id });
        res.status(200).json(deletedFavorite);
      } catch (error) {
        console.log(error);
      }
    default:
  }
};
