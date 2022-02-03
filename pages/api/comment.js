import prisma from '../../lib/prisma'

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      handleGET(req, res);
      break;
    case "POST":
      handlePOST(req, res);
      break;
    default:
      res.status(405).end();
      break;
  }
}

// GET /api/comment
async function handleGET(req, res) {
  try {
    const comments = await prisma.comment.findMany()
    res.json(comments)
    res.status(200).end();
  } catch (err) {
    res.status(err).json({});
  }
}

// POST /api/comment
async function handlePOST(req, res) {
  try {
    const comment = await prisma.comment.create({
      data: {
        ...req.body,
      },
    })
    res.json(comment)
    res.status(200).end();
  } catch (err) {
    res.status(err).json({});
  }
}
