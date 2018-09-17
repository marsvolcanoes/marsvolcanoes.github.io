var Xclose = document.getElementById("modelClose");
if(Xclose.addEventListener) {
Xclose.addEventListener("click", hideModel);
} else { 
Xclose.attachEvent("onclick", hideModel);
}

//document.getElementById("modelClose").addEventListener("click", hideModel);

var element = document.getElementById("modelWrapper");
if(element.addEventListener) {
element.addEventListener("click", hideModel);
} else { 
element.attachEvent("onclick", hideModel);
}

function hideModel() {
			var x = document.getElementById("PrintLB");
			var noRedirect = '.LBcontent-div, .printPics, .printblog, .LBimg, .LBa, .LBp';
			if (!event.target.matches(noRedirect)) {
			//if (event.target.id !== "Print-Ina") {
				x.style.display = "none";
			}
		}
		function showModel(mod) { 
			var iframe1 = '<iframe height="500" width="500" frameborder="0" src="https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/jarichardson/jarichardson.github.io/master/stls/';
			var iframe2 = '" title="';
			var iframe3 = '"></iframe>';
			var demmodel = true
			var x = document.getElementById("PrintLB");
			
			switch(mod) {
				case 'TL':
					var stlname = 'APOLLO17-region.stl';
					var imgsrc = 'images/3Dmodels/pic_taurus_littrow.jpg';
					var modelTitle = 'Apollo 17 region';
					var descrip = 'This is a zoom-out of the Apollo 17 Landing Site, showing the adjacent topography on the eastern rim of Mare Serenitatis. The landing site is in the valley near the center of the model, and the hills are members of the Taurus Mountains. Surrounding the Taurus-Littrow Valley landing site are the North, South, and East Massifs, and the Sculptured Hills, which might have been formed from the Imbrium impact.';
					var geog = 'Roughly 6 km x 10 km';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO17">LROC NAC DTM</a>';
				break;
				
				case 'Ina':
					var stlname = 'InaD-5ve.stl';
					var imgsrc = 'images/3Dmodels/pic_inaD.jpg';
					var modelTitle = 'Ina D';
					var descrip = 'Ina D is the largest of the Irregular Mare Patches on the Moon and it is famously difficult to see in orthographic photos because the high-standing blobs of material look like they are depressions.';
					var geog = 'Roughly 3 km wide';
					var ve = '5x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_INACALDERA1">LROC NAC DTM</a>';
				break;
				
				case 'a11':
					var stlname = 'APOLLO11.stl';
					var imgsrc = 'images/3Dmodels/pic_a11.gif';
					var modelTitle = 'Apollo 11, Mare Tranquillitatis';
					var descrip = 'The Eagle landed near the center of this model and its remaining descent stage can be seen and felt as a bump. The nearest recognizable crater to this bump is Little West Crater, about 50 m to the east. This is the farthest the crew walked in the Apollo 11 mission. Some larger unnamed craters surround the mission area.';
					var geog = '1.1 km x 0.9 km centered on the mission area';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO11">LROC NAC DTM</a>';
				break;
				
				case 'a12':
					var stlname = 'APOLLO12.stl'
					var imgsrc = 'images/3Dmodels/pic_a12.gif';
					var modelTitle = 'Apollo 12, Surveyor Crater';
					var descrip = 'Apollo 12 landed just 200 meters from the Surveyor 3 lander. The broad crater in the top left is Middle Crescent Crater, and the LM came down near the second largest crater in the model, Surveyor crater (center-right). The LM touched down on the northwest rim of Surveyor, while Surveyor 3 sits on the southwest rim.';
					var geog = '1 km x 1 km centered on the landing site';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO12">LROC NAC DTM</a>';
				break;
				
				case 'a14':
					var stlname = 'APOLLO14.stl'
					var imgsrc = 'images/3Dmodels/pic_a14.gif';
					var modelTitle = 'Apollo 14, Fra Mauro Highlands';
					var descrip = 'Apollo 14 landed in the Fra Mauro Highlands. The crater at the top-right is Cone Crater. The LM landed near the two overlapping craters near the center of the model, North and Central craters.';
					var geog = '2.25 km x 1.6 km centered on the landing site';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO14">LROC NAC DTM</a>';
				break;
				
				case 'a15':
					var stlname = 'APOLLO15.stl'
					var imgsrc = 'images/3Dmodels/pic_a15.gif';
					var modelTitle = 'Apollo 15, Hadley-Apennine Region';
					var descrip = 'The main feature at the boundary of the Apollo 15 study area is Hadley Rille, which is seen as a large valley. To the south the model ends at the slope of the Apennine Front. The LM landed in the north central area of this model.';
					var geog = '4.2 km x 6 km centered on the landing site';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO15">LROC NAC DTM</a>';
				break;
				
				case 'a16':
					var stlname = 'APOLLO16.stl'
					var imgsrc = 'images/3Dmodels/pic_a16.gif';
					var modelTitle = 'Apollo 16, Decartes Mountains';
					var descrip = 'The Apollo 16 mission drove between Smoky Mountain and North Ray Crater at the top of the model to Stone Mountain in the bottom-right corner. The crew passed through Palmetto and Gator craters in the center of the model and initially landed near Spook crater, a small crater in the center.';
					var geog = '11.5 km x 11.5 km centered on the landing site';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO16">LROC NAC DTM</a>';
				break;
				
				case 'a17':
					var stlname = 'apollo17.stl'
					var imgsrc = 'images/3Dmodels/pic_a17.gif';
					var modelTitle = 'Apollo 17, Taurus Littrow Valley';
					var descrip = 'The LM landed near the cluster of small craters in the center of Taurus-Littrow Valley. The valley extendes from the South Massif in the close corner to the North Massif and the large Sculptured Hills in the far corner. The Lee-Lincoln Scarp is seen in this model connecting the North and South Massifs.';
					var geog = '5.8 km x 5 km centered on the landing site';
					var ve = '3x';
					var datasrc = '<a href="http://wms.lroc.asu.edu/lroc/view_rdr/NAC_DTM_APOLLO17">LROC NAC DTM</a>';
				break;
				
				case 'ori':
					var stlname = 'OrientaleCrust.stl'
					var imgsrc = 'images/3Dmodels/pic_Mare_Orientale.png';
					var modelTitle = 'Orientale Crust Model';
					var descrip = 'This model shows the crust under Mare Orientale, a large basin on the Moon. The surface that we see from space is created using laser altimeter data (LOLA). The bottom of the crust is a model created from gravity data from the GRAIL mission. The striking feature of this model is the thin crust center, where the mantle rises to within a few km of the surface. The base of the model is the lunar equator and the basin is in the Southern Hemisphere so the model might be considered to be "upside-down".';
					var geog = '0-40° S, 70-120° W, about 1,200 km in width';
					var ve = '3x on both sides (6x thickness exag.)';
					var datasrc = '<a href="http://dx.doi.org/10.1126/science.aag0519">Zuber et al. 2016</a>; Gregory Neumann';
				break;
				
				case 'mos':
					var stlname = 'MoscovienseCrust.stl'
					var imgsrc = 'images/3Dmodels/pic_moscoviense.jpg';
					var modelTitle = 'Moscoviense Crust Model';
					var descrip = 'This model shows the crust under Mare Moscoviense, a basin on the Moon whose center might expose the lunar mantle. The surface that we see from space is created using laser altimeter data (LOLA). The bottom of the crust is a model created from gravity data from the GRAIL mission.';
					var geog = '16-35° S, 135-160° E, about 650 km in width';
					var ve = '3x on both sides (6x thickness exag.)';
					var datasrc = 'LOLA and Gregory Neumann';
				break;
				
			}
			
			document.getElementById("modelTitle").innerHTML = modelTitle;
			document.getElementById("modelPic").src=imgsrc;
			document.getElementById("modelDownload").innerHTML = 'Download '+stlname;
			document.getElementById("modelDownload").href="https://github.com/jarichardson/jarichardson.github.io/raw/master/stls/"+stlname;
			document.getElementById("STLViewer").innerHTML = iframe1+stlname+iframe2+stlname+iframe3;
			//if it's a geographic model, give an indication of geographic extence, vertical exag, and data source.
			if (demmodel === true) {
				document.getElementById("modelAbout").innerHTML = '<p class="LBp">'+descrip+'</p><p class="LBp"><strong>Geographic Extent:</strong> '+geog+'</p><p class="LBp"><strong>Vertical Exaggeration:</strong> '+ve+'</p><p class="LBp"><strong>Data Source:</strong> '+datasrc+'</p>';
			} else {
				document.getElementById("modelAbout").innerHTML = '<p class="LBp">'+descrip+'</p>';
			}
			
			x.style.display = "block";
		}
