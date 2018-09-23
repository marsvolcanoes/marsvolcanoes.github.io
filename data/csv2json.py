
'''
Jacob Richardson 2018

This is a python script to convert IAU delivered CSV files of named features into a .json file appropriate for leaflet.
'''

import numpy as np
import pandas as pd
import os,sys
mapid = 'map'

df = pd.read_csv('IAU_mons_pts_20180920.csv')
jsfile = 'pts.js'
#print(df)
#for columns in df:
#    print(columns)
'''
Feature_ID
Feature_Name
Target
Diameter
Center_Latitude
Center_Longitude
Northern_Latitude
Southern_Latitude
Eastern_Longitude
Western_Longitude
Coordinate_System
Feature_Type
Feature_Type_Code
Approval_Status
Approval_Date
Reference
Last_Updated'''

with open(jsfile,'w') as of:
    for index, row in df.iterrows():
        markername   = 'marker'+str(row['Feature_ID'])
        longitude = row['Center_Longitude']
        if longitude>180:
            longitude+= -360
        markercoor   = '(['+str(row['Center_Latitude'])+','+str(longitude)+'])'
        markertype   = row['Feature_Type_Code']
        featurename  = row['Feature_Name']
        featuretype  = row['Feature_Type']
        markercode   = 'var '+markername+' = L.circleMarker'+markercoor+'.addTo('+mapid+');\n'
        popupcode    = markername+'.bindPopup("<b>'+featurename+'</b>");\n'
        of.write(markercode)
        of.write(popupcode)
        
    #var marker = L.marker([51.5, -0.09]).addTo(mymap);
    #marker.bindPopup("<b>Hello world!</b><br>I am a popup.")