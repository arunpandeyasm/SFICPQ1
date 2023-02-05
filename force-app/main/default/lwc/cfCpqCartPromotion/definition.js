let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\n      \"actions\": {\n        \"deleteappliedpromoitems\": {\n          \"rest\": {\n            \"params\": {},\n            \"method\": \"DELETE\",\n            \"link\": \"/services/apexrest/vlocity_cmt/v2/cpq/carts/801Dn000000suE5QAQ/promotions?cartId=801Dn000000suE5QAQ&id=a31Dn000000xzwVQAU\"\n          },\n          \"remote\": {\n            \"params\": {\n              \"methodName\": \"deleteAppliedPromoItems\",\n              \"id\": \"a31Dn000000xzwVQAU\",\n              \"cartId\": \"801Dn000000suE5QAQ\"\n            }\n          },\n          \"client\": {\n            \"params\": {}\n          }\n        }\n      },\n      \"displaySequence\": -1,\n      \"Id\": {\n        \"value\": \"a31Dn000000xzwVQAU\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Record ID\",\n        \"hidden\": true,\n        \"fieldName\": \"Id\",\n        \"editable\": false,\n        \"dataType\": \"ID\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__Action__c\": {\n        \"value\": \"Add\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Action\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__Action__c\",\n        \"editable\": true,\n        \"dataType\": \"PICKLIST\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__PromotionId__c\": {\n        \"value\": \"a3TDn000000t3JdUAR\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Promotion\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__PromotionId__c\",\n        \"editable\": true,\n        \"dataType\": \"REFERENCE\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__Sequence__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Sequence\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__Sequence__c\",\n        \"editable\": true,\n        \"dataType\": \"DOUBLE\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__BillingAccountId__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Account\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__BillingAccountId__c\",\n        \"editable\": true,\n        \"dataType\": \"REFERENCE\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__FulfilmentStatus__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Fulfilment Status\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__FulfilmentStatus__c\",\n        \"editable\": true,\n        \"dataType\": \"PICKLIST\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__ReasonForCancellation__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Reason for Cancellation\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__ReasonForCancellation__c\",\n        \"editable\": true,\n        \"dataType\": \"STRING\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__RequestDate__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Request Date\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__RequestDate__c\",\n        \"editable\": true,\n        \"dataType\": \"DATETIME\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__SubAction__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Sub Action\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__SubAction__c\",\n        \"editable\": true,\n        \"dataType\": \"PICKLIST\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__CommitmentStartDate__c\": {\n        \"value\": \"22/03/2021\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Commitment Start Date\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__CommitmentStartDate__c\",\n        \"editable\": true,\n        \"dataType\": \"DATETIME\",\n        \"alternateValues\": \"22/3/2021\",\n        \"actions\": {}\n      },\n      \"vlocity_cmt__CommitmentEndDate__c\": {\n        \"value\": \"22/03/2022\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Commitment End Date\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__CommitmentEndDate__c\",\n        \"editable\": true,\n        \"dataType\": \"DATETIME\",\n        \"alternateValues\": \"25/03/2021\",\n        \"actions\": {}\n      },\n      \"vlocity_cmt__PricingStartDate__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Benefit Start Date\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__PricingStartDate__c\",\n        \"editable\": true,\n        \"dataType\": \"DATETIME\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__PricingEndDate__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Benefit End Date\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__PricingEndDate__c\",\n        \"editable\": true,\n        \"dataType\": \"DATETIME\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"vlocity_cmt__AppliesTo__c\": {\n        \"value\": null,\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Applies To\",\n        \"hidden\": true,\n        \"fieldName\": \"vlocity_cmt__AppliesTo__c\",\n        \"editable\": true,\n        \"dataType\": \"PICKLIST\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"name\": \"test123\",\n      \"Description\": {\n        \"value\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Description\",\n        \"hidden\": null,\n        \"fieldName\": \"Description\",\n        \"editable\": true,\n        \"dataType\": \"string\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"Name\": {\n        \"value\": \"test123\",\n        \"previousValue\": null,\n        \"originalValue\": null,\n        \"messages\": [],\n        \"label\": \"Name\",\n        \"hidden\": true,\n        \"fieldName\": \"Name\",\n        \"editable\": true,\n        \"dataType\": \"string\",\n        \"alternateValues\": null,\n        \"actions\": {}\n      },\n      \"AppliedPromotionAction\": \"Add\"\n    }","dsDelay":"","resultVar":""}},"dynamicCanvasWidth":{"type":"desktop"},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCartPromotion_2_Vlocity","Id":"0RbDn000001RZVI0AQ","ManageableState":"unmanaged","MasterLabel":"cfCpqCartPromotion_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"states":[{"actions":[],"childCards":["cpqPromotionDetailView"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Text-1","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%3Cspan%20style=%22font-size:%2012pt;%20font-family:%20'Salesforce%20Sans',%20Arial,%20sans-serif;%22%3E%3Cstrong%3E%7Bname%7D%3C/strong%3E%3C/span%3E%3C/div%3E","record":"{record}"},"size":{"default":"4","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo_name slds-p-top_x-small slds-p-left_x-small ","container":{"class":"cpq__cart-applied-promo_name"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"4","isResponsive":false},"sizeClass":"slds-size_4-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"type":"text"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Block-1-Text-0","key":"element_element_element_block_0_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BDescription.value%7D%3C/div%3E","record":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo-description_text slds-p-top_x-small slds-p-left_x-small ","container":{"class":"cpq__cart-applied-promo-description_text"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo-description_text slds-p-top_x-small slds-p-left_x-small ","container":{"class":"cpq__cart-applied-promo-description_text"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:x-small","size":"x-small","type":"top"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-0-Block-1-Action-1","key":"element_element_element_block_0_0_block_1_0_action_1_0","name":"Action","parentElementKey":"element_element_block_0_0_block_1_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"cardName":"cpqPromotionDetailView","cardNode":"{record}","displayName":"{Label.CPQSeeDetailsLabel}","flyoutLwc":"cpqPromotionDetailView","flyoutParams":{"hideAddToCartButton":"true"},"flyoutType":"childCard","hasExtraParams":true,"id":"flex-action-1625828505478","openFlyoutIn":"Modal","openUrlIn":"Current Window","type":"Flyout","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"11","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n        color:#0070D2; ","text":{"align":"","color":"#0070D2"}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-left_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"11","isResponsive":false},"sizeClass":"slds-size_11-of-12 ","style":"     : #ccc 1px solid; \n        color:#0070D2; ","text":{"align":"","color":"#0070D2"}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0-Block-2","key":"element_element_block_0_0_block_1_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo_description ","container":{"class":"cpq__cart-applied-promo_description"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo_description ","container":{"class":"cpq__cart-applied-promo_description"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-0-Field-3","key":"element_element_block_0_0_outputField_2_0","name":"Field","parentElementKey":"element_block_0_0","property":{"card":"{card}","fieldName":"vlocity_cmt__CommitmentEndDate__c.value","format":"M/D/YYYY","label":"{vlocity_cmt__CommitmentEndDate__c.label}","placeholder":"","record":"{record}","type":"date"},"size":{"default":"2","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo_date slds-p-bottom_x-small slds-p-left_x-small ","container":{"class":"cpq__cart-applied-promo_date"},"elementStyleProperties":{},"inlineStyle":"font-size:1rem","margin":[],"padding":[{"label":"bottom:x-small","size":"x-small","type":"bottom"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         font-size:1rem","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__cart-applied-promo_date slds-p-bottom_x-small slds-p-left_x-small ","container":{"class":"cpq__cart-applied-promo_date"},"elementStyleProperties":{},"inlineStyle":"font-size:1rem","margin":[],"padding":[{"label":"bottom:x-small","size":"x-small","type":"bottom"},{"label":"left:x-small","size":"x-small","type":"left"}],"size":{"default":"2","isResponsive":false},"sizeClass":"slds-size_2-of-12 ","style":"     : #ccc 1px solid; \n         font-size:1rem","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexMenu","elementLabel":"Block-0-Menu-4","key":"element_element_block_0_0_flexMenu_3_0","name":"Menu","parentElementKey":"element_block_0_0","property":{"card":"{card}","iconName":"utility:threedots_vertical","iconPosition":"","iconSize":"small","menuItems":[{"actionData":{"card":"{card}","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{recordId}","getInputMethod":"prepareDeletePromotionInput","handleResponseMethod":"processDeletePromotionResponse","id":"{Id.value}","methodName":"deletePromotion","price":"true","promotionName":"{name}","validate":"true"},"hasExtraParams":true,"id":"flex-action-1628176417067","message":"cpq_ui_event","openUrlIn":"Current Window","parent":"menu","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1639132977729-hrzyj5i0m","label":"Action","stateAction":{"actionConditions":null,"displayName":"{Label.CPQDelete}","eventName":"cpq_{recordId}","extraParams":{"cartId":"{Parent.cartId}","getInputMethod":"prepareDeletePromotionInput","handleResponseMethod":"processDeletePromotionResponse","id":"{Id.value}","methodName":"deletePromotion","price":"true","promotionName":"{name}","validate":"true"},"hasExtraParams":true,"id":"flex-action-1639132978972","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"iconName":"","iconPosition":"","label":"{Label.CPQDelete}","name":"menu-item-1611281111302-0","showSpinner":"false"}],"overflow":true,"position":"right","record":"{record}","size":"xx-small","type":"action","variant":""},"size":{"default":1,"isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right cpq__cart-applied-promo_menu slds-m-top_small ","container":{"class":"cpq__cart-applied-promo_menu"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[],"size":{"default":1,"isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right cpq__cart-applied-promo_menu slds-m-top_small ","container":{"class":"cpq__cart-applied-promo_menu"},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"top:small","size":"small","type":"top"}],"padding":[],"size":{"default":1,"isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#088DEE","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"cpq__cart-applied-promo_color slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_small ","container":{"class":"cpq__cart-applied-promo_color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #088DEE 1px solid;border-right: #088DEE 1px solid;border-bottom: #088DEE 1px solid;border-left: #088DEE 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#088DEE","radius":"","style":"","type":["border_top","border_right","border_bottom","border_left"],"width":"1"},"class":"cpq__cart-applied-promo_color slds-border_top slds-border_right slds-border_bottom slds-border_left slds-p-top_small ","container":{"class":"cpq__cart-applied-promo_color"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-top: #088DEE 1px solid;border-right: #088DEE 1px solid;border-bottom: #088DEE 1px solid;border-left: #088DEE 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card cpq__cart-applied_promo slds-p-around_x-small slds-m-around_none ","container":{"class":"slds-card cpq__cart-applied_promo"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCartPromotion","Id":"a3gDn000000x98vQAS","vlocity_cmt__GlobalKey__c":"cpqCartPromotion/Vlocity/2/1639132835144"};
  export default definition