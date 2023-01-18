import React, { useEffect } from "react";
import axios from "axios";
import data from '../../db/cities.json'

function loadData() {
  return data;
}

console.log(loadData)