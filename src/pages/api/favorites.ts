import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../services/mongo";
import connectToDatabase from "../../services/mongo";
import {getSession} from 'next-auth/client'

connectToDatabase();

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { db } = await connectDb();

  switch (req.method) {
    case "POST":
      try {
        const session = await getSession({req})
        const { id, title, thumbnail, freetogame_profile_url, short_description } = req.body
        const hasFavorite = await db.collection('users').findOne({favorites: {id}})
        res.json({ error: "Game already exists in your lib." })
        if(!hasFavorite) {
          const response = await db.collection('users').updateOne({ email: session.user.email }, {$push:
            {favorites: {id, title, thumbnail, freetogame_profile_url, short_description}, upsert: true}
          })
          res.status(200).json({ success: true, data: response });
          console.log(response)
        }
      } 
      catch (error) {
        console.error(error);
      }
      break;
    case "GET":
      try {
        const session = await getSession({req})
        console.log(session.user.email)
        const favorites = await db.collection("users").findOne({ email: session.user.email})
        res.status(200).json({ favorites });
      } catch (error) {
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const { id } = req.body;
        const session = await getSession({req})
        const deletedFavorite = await db
          .collection("users")
          .updateOne({email: session.user.email}, {$pull: {
            favorites: {id}
          }});
        res.status(200).json(deletedFavorite);
      } catch (error) {
        console.log(error);
      }
      break;
      default:
  }
};
