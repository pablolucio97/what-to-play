import { fauna } from "../../services/faunadb";
import { query as q } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        await fauna
          .query(q.Paginate(q.Match(q.Index("get_favorites"))))
          .then((ret) => res.json(ret))
          .catch((err) => console.log(err));
        return res.send(res.json);
      } catch (error) {
        console.log(error);
      }
      break;
    case "POST":
      try {
        const { id, title, freetogame_profile_url, thumbnail } = req.body;

        await fauna
          .query(
            q.Create(q.Collection("favorites"), {
              data: { gameId: id, title, freetogame_profile_url, thumbnail },
            })
          )
          .then((ret) => res.json(ret))
          .catch((err) => console.log(err));
        return res.status(201).json({ success: true });
      } catch (error) {
        console.log(error);
        return false;
      }
      break;
    default:
  }
};

/* export async function addToFavorites(gameId, gameTitle) {
  try {
    await fauna
      .query(
        q.If(
          q.Not(q.Exists(q.Match(q.Index("get_game"), q.Casefold(gameTitle)))),
          q.Create(q.Collection("favorites"), {
            data: { gameId, title: gameTitle },
          }),
          q.Get(q.Match(q.Index("get_game"), q.Casefold(gameTitle)))
        )
      )
      .then((ret) => console.log(ret))
      .catch((err) => console.error("Error: %s", err));

    console.log(gameId, gameTitle);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
} */
