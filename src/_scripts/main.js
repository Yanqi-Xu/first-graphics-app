// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

var chart=require('./_charts.js');
var L = require("leaflet");
var MiniMap=require('leaflet-minimap');
var map=require('./_map.js');

//let it know where to find icons
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';