
'''
Jacob Richardson 2018

This is a python script to convert IAU delivered CSV files of named features into a .json file appropriate for leaflet.
'''

import numpy as np
import pandas as pd
import os,sys
mapid = 'map'

df = pd.read_csv('IAU_mons_pts_20180920.csv')
Bleacher_df = pd.read_csv('TharsisVents140408_table.csv')
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
        markercoor   = '['+str(row['Center_Latitude'])+','+str(longitude)+']'
        markertype   = row['Feature_Type_Code']
        markerrad    = str(row['Diameter']*1000/2.0*6731/3390) #km->m, D->r, Earth->Mars
        featurename  = row['Feature_Name']
        featuretype  = row['Feature_Type']
        markercode   = 'var '+markername+' = L.circle('+markercoor+', {radius: '+markerrad+', color: "#804000"}).addTo('+mapid+');\n'
        if "Montes" in row['Feature_Name']:
            markercode   = 'var '+markername+' = L.circle('+markercoor+', {radius: '+markerrad+', color: "#ababff",fill: false}).addTo('+mapid+');\n'
        popupcode    = markername+'.bindPopup("<b>'+featurename+'</b>");\n'
        of.write(markercode)
        of.write(popupcode)
        
    #var marker = L.marker([51.5, -0.09]).addTo(mymap);
    #             L.circle([50.5, 30.5], {radius: 200}).addTo(map);
    #marker.bindPopup("<b>Hello world!</b><br>I am a popup.")

    
    for index, row in Bleacher_df.iterrows():
        markername   = 'marker_Tharsis'+str(index)
        longitude = row['Longitude_E']
        if longitude>180:
            longitude+= -360 
        markercoor   = '['+str(row['Latitude_oc'])+','+str(longitude)+']'
        markertype   = 'vent'
        markerrad    = '1' #px
        featurename  = 'Tharsis Vent #'+str(index)+'<br />Bleacher et al., 2010'
        featuretype  = 'vent'
        markercode   = 'var '+markername+' = L.circleMarker('+markercoor+', {radius: '+markerrad+', color: "#000"}).addTo('+mapid+');\n'
        popupcode    = markername+'.bindPopup("<b>'+featurename+'</b>");\n'
        of.write(markercode)
        of.write(popupcode)