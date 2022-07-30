import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetStatesController(req: Request, res: Response) {
  const { name } = req.params;
  const states = await prismaClient.state.findMany({
    where: {
      name
    }
  });
  return res.json(states);
}