global.XMLHttpRequest = require("xhr2");
import NextCors from 'nextjs-cors';
// firebase
import { app } from '../../../services/base';
const storageRef = app.storage('gs://cbae-f9c77.appspot.com').ref();



export default async function getImages(req, res) {


  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200
  })

  const name = req.query.name;
  const img = storageRef.child(`images/landing/${name}`);
  const url = await img.getDownloadURL();

  if(url) {
    res.status(200).json({success: true, url});
    return null;
  }

  res.status(200).json({success: false, message: 'noshow'});
  return null;

}

