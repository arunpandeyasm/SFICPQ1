let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"cartId":"{recordId}"},"ipMethod":"CPQ_GetAppliedDiscounts","resultVar":"","vlocityAsync":false}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1626173316453-tx2whyfje","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"apimessage","fieldValue":"{action.message}"}],"id":"flex-action-1626173359649","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_discount_apply_response","element":"action","eventLabel":"pubsub","eventname":"cpq_discount_apply_response","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCreateCustomDiscountModal_2_Vlocity","Id":"0RbDn000001RZVL0AA","ManageableState":"unmanaged","MasterLabel":"cfCpqCreateCustomDiscountModal_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableField":"","selectableMode":"Single","selectedCardsLabel":"","sessionVars":[],"states":[{"actions":[],"childCards":["cpqCreateCustomDiscountBasicInfo","cpqCreateCustomDiscountAmountDetails","cpqCreateCustomDiscountDurationDetails"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CPQCreateCustomDiscount%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"header","container":{"class":""},"customClass":"header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"header","container":{"class":""},"customClass":"header","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"children":[{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-Block-0-FlexCard-0","key":"element_element_element_block_1_0_block_0_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_0_0","property":{"cardName":"cpqCreateCustomDiscountBasicInfo","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0-Block-1","key":"element_element_element_block_1_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"border-bottom","container":{"class":""},"customClass":"border-bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"border-bottom","container":{"class":""},"customClass":"border-bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-Block-0-FlexCard-2","key":"element_element_element_block_1_0_block_0_0_childCardPreview_2_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_0_0","property":{"cardName":"cpqCreateCustomDiscountAmountDetails","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"},{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0-Block-3","key":"element_element_element_block_1_0_block_0_0_block_3_0","name":"Block","parentElementKey":"element_element_block_1_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"border-bottom","container":{"class":""},"customClass":"border-bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"border-bottom","container":{"class":""},"customClass":"border-bottom","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-Block-0-FlexCard-4","key":"element_element_element_block_1_0_block_0_0_childCardPreview_4_0","name":"FlexCard","parentElementKey":"element_element_block_1_0_block_0_0","property":{"cardName":"cpqCreateCustomDiscountDurationDetails","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-0","key":"element_element_block_1_0_block_0_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"apimessage","hasMergeField":false,"id":"state-new-condition-19","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"field-container","container":{"class":""},"customClass":"field-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"field-container","container":{"class":""},"customClass":"field-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-1-Text-0","key":"element_element_element_block_1_0_block_1_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7Bapimessage%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Block-1-Action-1","key":"element_element_element_block_1_0_block_1_0_action_1_0","name":"Action","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","hideActionIcon":true,"record":"{record}","stateAction":{"displayName":"{Label.CPQNewCustomDiscount}","eventName":"reload","id":"flex-action-1626185918110","message":"reload","openUrlIn":"Current Window","subType":"PubSub","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-text-link","container":{"class":""},"customClass":"slds-text-link","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center slds-text-link","container":{"class":""},"customClass":"slds-text-link","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"apimessage","hasMergeField":false,"id":"state-new-condition-26","operator":"!=","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-container","container":{"class":""},"customClass":"field-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-container","container":{"class":""},"customClass":"field-container","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"body","container":{"class":""},"customClass":"body","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"body","container":{"class":""},"customClass":"body","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-2-Action-1","key":"element_element_block_2_0_action_0_0","name":"Action","parentElementKey":"element_block_2_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"apimessage","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"draggable":false,"hideActionIcon":true,"isOpen":true,"key":"1639134457889-gnj3izphg","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.SaveAndApply}","eventName":"cpqutils_{recordId}","extraParams":{"cartId":"{Parent.cartId}","data":"{response}","ipMethod":"CPQ_ApplyDiscount","utilMethod":"createDiscountSubmit"},"hasExtraParams":true,"id":"flex-action-1639134459512","message":"cpq_ui_event","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"},"stateObj":"{record}"}],"buttonVariant":"brand","card":"{card}","data-conditions":{"group":[{"field":"apimessage","hasMergeField":false,"id":"state-new-condition-2","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"standard-default","label":"{Label.SaveAndApply}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_right ","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":true,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-large-size_12-of-12 slds-medium-size_12-of-12 slds-small-size_12-of-12 slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"right","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_footer","container":{"class":""},"customClass":"cpq_footer","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_footer","container":{"class":""},"customClass":"cpq_footer","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[{"group":[{"field":"response.actions","hasMergeField":false,"id":"state-new-condition-68","operator":"!=","type":"custom","value":"undefined"},{"field":"response.records.actions","hasMergeField":false,"id":"state-new-condition-102","logicalOperator":"||","operator":"!=","type":"custom","value":"undefined"}],"id":"state-new-group-69"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none cpq-create_discount","container":{"class":"slds-card"},"customClass":"cpq-create_discount","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"blankCardState":false,"childCards":[],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-0","name":"Text","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.MSNoRecordsGroupsLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-text-align_center ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"}]}},"conditions":{"group":[{"field":"response.records.actions","hasMergeField":false,"id":"state-condition-8","operator":"==","type":"custom","value":"undefined"}],"id":"state-condition-object","isParent":true},"documents":[],"fields":[],"isSmartAction":false,"name":"Blank","omniscripts":[],"smartAction":{},"styleObject":{"class":"slds-card slds-p-around_x-small slds-m-bottom_x-small","container":{"class":"slds-card"},"margin":[{"size":"x-small","type":"bottom"}],"padding":[{"size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12"}}],"theme":"slds","title":"cpqCreateCustomDiscountModal","Id":"a3gDn000000x99nQAC","vlocity_cmt__GlobalKey__c":"cpqCreateCustomDiscountModal/Vlocity/2/1639134450273"};
  export default definition