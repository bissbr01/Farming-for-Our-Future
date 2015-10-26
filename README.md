# Farming-for-Our-Future
Use our visual interface with the NASS dataset to help you produce, buy, and sell farm products.

Instructions:
1.	Open in the following URL in your web browser (Chrome preferred, but all work):
a.	http://www.ratemyphillylandlord.com/USDA_Project/index.php
2.	You will be asked if you’d like to share your location.  
a.	By selecting yes, you will be able to use the full functionality of the app.  
b.	If you do not, you will still be able to use the main features.
3.	To Create a Graph
a.	Using the Commodity--Location--Time tabs, select the parameters of your search
b.	Click the Graph! Button.  After loading, the graph will appear at the bottom of the page
i.	N.B.  If your search is too generic, the ajax call to the NASS API will timeout after 12 seconds.  You will then be prompted to create a more specific query.
4.	Using the graph:
a.	The data will appear as a blue scatter plot. The Y-axis will be the statistical category you selected under the 'Commodity' tab. The X-axis will be the years which you selected under the 'Time' tab
b.	The red linear regression line helps you to read the data. The larger the data set, the more reliable the linear regression line is to predict where the data is going. The regression line will not appear if there is at less than 3 points on the graph.
c.	You can toggle on and off the blue scatter plot or the red regression line by selecting their names at the bottom of the graph.
d.	You can delete, move, resize, and pop out graphs. Use the corresponding icons on the graphs.
e.	You can zoom in on a section of a graph by clicking and dragging over the selection you'd like to view. This can then be reset to the original by clicking the "reset zoom" button in the top left corner.
5.	Using the Presets
a.	These are graphs that are automatically generated based on your location.
b.	Top 5 Cash Crops:
i.	Based on your current location, this will show you the Area Planted by 5 major cash crops: corn, cotton, soybeans, rice, and wheat.
c.	Corn Commodity Overview
i.	Based on your current location, this will show you the yield, area planted, and area harvested of corn.
