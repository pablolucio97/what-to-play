/* import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../services/mongo";

import { getSession } from "next-auth/client";
const session = await getSession({ req });
const {user} = session
const email = user.email
const name = user.email

const {dbConnect} = await connectDb()
const hasUser = await dbConnect.collection('users').findOne({email})

if(!hasUser) {
  const newUser = await hasUser.insertOne({
    email,
    name
  })
}else{
  await hasUser.findOne({email})
} */