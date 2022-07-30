import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export default async function GetCitiesController(req: Request, res: Response) {
  const { name } = req.params;
  const cities = await prismaClient.city.findMany({
    where: {
      name
    }
  });
  return res.json(cities);
}
