let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"applyto\" : \"all\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626181638337-y8163w9uv","label":"Action","stateAction":{"actionConditions":{"group":[{"field":"{action.value}","hasMergeField":true,"id":"state-new-condition-0","operator":"==","type":"custom","value":"all"},{"field":"{action.value}","hasMergeField":true,"id":"state-new-condition-7","logicalOperator":"||","operator":"==","type":"custom","value":"specific"}],"id":"state-condition-object","isParent":true},"eventName":"setValues","fieldValues":[{"fieldName":"applyto","fieldValue":"{action.value}"}],"id":"flex-action-1625803526323","type":"cardAction"}}],"channelname":"customDiscoutField","displayLabel":"customDiscoutField:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"isFlex":true,"lwc":{"DeveloperName":"cfCpqCreateCustomDiscountApplyToggle_1_Vlocity","Id":"0RbDn000001RZVGCA0","ManageableState":"unmanaged","MasterLabel":"cfCpqCreateCustomDiscountApplyToggle_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"applyTo","val":"all"}],"states":[{"actions":[],"childCards":["cpqCatalogSearch","cpqProductSearch"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"flexRadioInput","elementLabel":"customDiscoutField_{recordId}","name":"Radio","property":{"card":"{card}","propertyObj":{"controlHeight":"100","controlWidth":"100","customProperties":[{"id":0,"label":"name","value":"customDiscoutField"},{"id":1,"label":"data-field","value":"applyto"}],"enabledCaption":"true","imageCountInRow":"3","label":"{Label.CPQApplyTo}","name":"Radio-1","options":[{"id":0,"imgId":"","label":"All Items in Cart","selected":true,"value":"all"},{"id":1,"imgId":"","label":"Specific Products","selected":false,"value":"specific"}],"radioDisplayValue":"radiogroup.button","value":"all"},"record":"{record}","type":"radiogroup.button"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element","userUpdatedElementLabel":true},{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-Block-0-FlexCard-0","key":"element_element_element_block_1_0_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_0_0","property":{"cardName":"cpqCatalogSearch","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:x-small","size":"x-small","type":"horizontal"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:x-small","size":"x-small","type":"horizontal"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-2-Block-1-FlexCard-0","key":"element_element_element_block_1_0_block_1_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_1_0","property":{"cardName":"cpqProductSearch","cardNode":"","isChildCardTrackingEnabled":false,"parentAttribute":{"multiProductsSelect":"true"},"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-1","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:x-small","size":"x-small","type":"horizontal"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-horizontal_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"horizontal:x-small","size":"x-small","type":"horizontal"}],"size":{"default":"12","isResponsive":true,"large":"6","medium":"12","small":"12"},"sizeClass":"slds-large-size_6-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"applyto","hasMergeField":false,"id":"state-new-condition-11","operator":"==","type":"custom","value":"specific"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-m-around_none ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCreateCustomDiscountApplyToggle","Id":"a3gDn000000x9DYQAS","vlocity_cmt__GlobalKey__c":"cpqCreateCustomDiscountApplyToggle/Vlocity/1/1623830683320"};
  export default definition