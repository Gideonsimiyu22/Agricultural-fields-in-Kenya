var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MapofKenya_1 = new ol.format.GeoJSON();
var features_MapofKenya_1 = format_MapofKenya_1.readFeatures(json_MapofKenya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapofKenya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapofKenya_1.addFeatures(features_MapofKenya_1);
var lyr_MapofKenya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapofKenya_1, 
                style: style_MapofKenya_1,
                popuplayertitle: "Map of Kenya",
                interactive: true,
                title: '<img src="styles/legend/MapofKenya_1.png" /> Map of Kenya'
            });
var format_Agriculturalfields_2 = new ol.format.GeoJSON();
var features_Agriculturalfields_2 = format_Agriculturalfields_2.readFeatures(json_Agriculturalfields_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agriculturalfields_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agriculturalfields_2.addFeatures(features_Agriculturalfields_2);
var lyr_Agriculturalfields_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agriculturalfields_2, 
                style: style_Agriculturalfields_2,
                popuplayertitle: "Agricultural fields",
                interactive: true,
                title: '<img src="styles/legend/Agriculturalfields_2.png" /> Agricultural fields'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MapofKenya_1.setVisible(true);lyr_Agriculturalfields_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MapofKenya_1,lyr_Agriculturalfields_2];
lyr_MapofKenya_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Agriculturalfields_2.set('fieldAliases', {'AGID': 'AGID', 'AGRICULTUR': 'AGRICULTUR', });
lyr_MapofKenya_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Agriculturalfields_2.set('fieldImages', {'AGID': 'TextEdit', 'AGRICULTUR': 'TextEdit', });
lyr_MapofKenya_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'inline label - always visible', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Agriculturalfields_2.set('fieldLabels', {'AGID': 'no label', 'AGRICULTUR': 'inline label - always visible', });
lyr_Agriculturalfields_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});