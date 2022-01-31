// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  console.log('making request')
  const response = await axios.get('localhost:5000/api/csv');
  res.status(200).send(response)
}
