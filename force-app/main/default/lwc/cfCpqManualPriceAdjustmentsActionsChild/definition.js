let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{},"type":null,"value":{}},"enableLwc":true,"globalCSS":false,"isFlex":true,"isRepeatable":false,"lwc":{"DeveloperName":"cfCpqManualPriceAdjustmentsActionsChild_2_Vlocity","Id":"0RbDn000001RZUeCAW","ManageableState":"unmanaged","MasterLabel":"cfCpqManualPriceAdjustmentsActionsChild_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"RadioGroup-0","name":"RadioGroup","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"type","value":"button"},{"id":2,"label":"value","value":"{Parent.signType}"}],"label":"Discount / Upcharge","name":"ChargeSignType","options":[{"id":0,"label":"Discount (-)","selected":true,"value":"Discount"},{"id":1,"label":"Upcharge (+)","selected":false,"value":"Upcharge"}],"radioDisplayValue":"radiogroup","value":"Discount"},"record":"{record}","type":"radiogroup"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","container":{"class":"slds-text-align_center"},"customClass":"cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_7-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","container":{"class":"slds-text-align_center"},"customClass":"cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_7-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Input - Adjustment Value - Percent","name":"Number","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"formatter","value":"percent-fixed"},{"id":1,"label":"min","value":"0"},{"id":2,"label":"messageWhenRangeUnderflow","value":"{Label.CPQMessageWhenRangeUnderflow}"},{"id":3,"label":"step","value":"0.0001"}],"disabled":"false","label":"{Label.CPQAmount}","name":"ChildAdjustmentValue","placeholder":"0","readOnly":"false","required":"true","value":"{Parent.adjustmentValue}"},"record":"{record}","type":"number"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"5","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding ","container":{"class":"cpq__adjust-pricing-elements_padding"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"5","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_5-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding ","container":{"class":"cpq__adjust-pricing-elements_padding"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"5","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_5-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.adjustmentMode","id":"state-new-condition-8","operator":"==","type":"custom","value":"Percent"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"By Percentage","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"RadioGroup-0-clone-0","name":"RadioGroup","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"type","value":"button"},{"id":2,"label":"value","value":"{Parent.signType}"}],"label":"Discount / Upcharge","name":"ChargeSignType","options":[{"id":0,"label":"Discount (-)","value":"Discount"},{"id":1,"label":"Upcharge (+)","value":"Upcharge"}],"value":""},"record":"{record}","type":"radiogroup"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","container":{"class":"slds-text-align_center"},"customClass":"cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_7-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","container":{"class":"slds-text-align_center"},"customClass":"cpq__chargetype-button cpq__adjust-pricing-elements_padding cpq__adjust-pricing-nonlabel-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"7","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_7-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Input - Adjustment Value - Absolute","name":"Currency","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"min","value":"0"},{"id":1,"label":"messageWhenRangeUnderflow","value":"{Label.CPQMessageWhenRangeUnderflow}"},{"id":2,"label":"step","value":"0.0001"}],"disabled":"false","label":"{Label.CPQAmount}","name":"ChildAdjustmentValue","readOnly":"false","required":"true","value":"{Parent.adjustmentValue}"},"record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"6"},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding","container":{"class":""},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding","container":{"class":""},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"6","medium":"6","small":"6"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.adjustmentMode","id":"state-condition-4","operator":"==","type":"custom","value":"Absolute"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"By Absolute Value","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Combobox - Adjustment Code","name":"ComboBox","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"placeholder","value":"Adjustment Code"},{"id":1,"label":"options","value":"{Parent.adjustmentCodeOptions}"},{"id":2,"label":"value","value":"{Parent.adjustmentCodeValue}"},{"id":3,"label":"messageWhenValueMissing","value":"{Label.CPQMessageWhenValueMissing}"}],"disabled":"false","label":"{Label.CPQAdjustmentCode}","name":"ChildAdjustmentCode","readOnly":"false","required":"true","value":""},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":false},"stateIndex":2,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__config-attributes_popover-relative cpq__adjust-pricing-elements_padding","container":{"class":"cpq__config-attributes_popover-relative"},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__config-attributes_popover-relative cpq__adjust-pricing-elements_padding","container":{"class":"cpq__config-attributes_popover-relative"},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.adjustmentMode","id":"state-condition-0","operator":"==","type":"custom","value":"Code"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"By Adjustment Code","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Input - Adjustment Value - Absolute","name":"Currency","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":2,"label":"step","value":"0.0001"}],"disabled":"false","label":"{Label.CPQAmount}","name":"ChildAdjustmentValue","readOnly":"false","required":"true","value":"{Parent.adjustmentValue}"},"record":"{record}","type":"currency"},"size":{"default":"12","isResponsive":false,"large":"6","medium":"6","small":"6"},"stateIndex":3,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding","container":{"class":""},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"6","medium":"6","small":"6"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__adjust-pricing-elements_padding","container":{"class":""},"customClass":"cpq__adjust-pricing-elements_padding","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"6","medium":"6","small":"6"},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true}]}},"conditions":{"group":[{"field":"Parent.adjustmentMode","id":"state-condition-6","operator":"==","type":"custom","value":"Override"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Override","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-Default-State","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%20class=%22slds-text-align_center%20slds-text-heading_small%20slds-text-color_error%22%3EDefault%20State%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%20slds-text-heading_small%20slds-text-color_error%22%3E%3Cstrong%20class=%22slds-text-heading_medium%22%3EINVALID%20ADJUSTMENT%20TYPE%3C/strong%3E%3C/div%3E%0A%3Cdiv%20class=%22slds-text-align_center%20slds-text-heading_small%20slds-text-color_error%22%3E%3Cstrong%20class=%22slds-text-heading_medium%22%3EadjMode%20-%20%7BParent.adjustmentMode%7D%3C/strong%3E%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"text","userUpdatedElementLabel":true}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Default","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqManualPriceAdjustmentsActionsChild","Id":"a3gDn000000x99OQAC","vlocity_cmt__GlobalKey__c":"cpqManualPriceAdjustmentsActionsChild/Vlocity/2/1616042788221"};
  export default definition