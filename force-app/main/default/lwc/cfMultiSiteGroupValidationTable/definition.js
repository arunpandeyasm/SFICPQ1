let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"[{\"groupName\":\"G-1\", \"actionMessage\": \"Test Message\",\"hasUnappliedGroupItems\": false,\"hasUnappliedMembers\": false}]","dsDelay":"","resultVar":""}},"enableLwc":true,"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfMultiSiteGroupValidationTable_1_Vlocity","Id":"0RbDn000001RZUp0AU","ManageableState":"unmanaged","MasterLabel":"cfMultiSiteGroupValidationTable_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"selectableMode":"Multi","states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"action","elementLabel":"ActionInvalidIconWithLabel","key":"element_element_block_0_0_action_0_0","name":"Action","parentElementKey":"element_block_0_0","property":{"actionList":[{"card":"{card}","data-conditions":{"group":[{"field":"isActionValid","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"iconColor":"#F70000","iconOnly":true,"iconSize":"small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"{actionMessage}","eventName":"setValues","id":"flex-action-1634146302854","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"utility:ban"},"stateObj":"{record}"}],"card":"{card}","data-conditions":{"group":[{"field":"isActionValid","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-3","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-13","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#EA001E","iconName":"utility:ban","iconOnly":true,"iconSize":"small","label":"\\{actionMessage}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"iconColor":"#EA001E","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"iconColor":"#EA001E","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"flexIcon","elementLabel":"ActionInvalidIconWithoutLabel","key":"element_element_block_0_0_flexIcon_1_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"isActionValid","hasMergeField":false,"id":"state-new-condition-36","operator":"==","type":"custom","value":"false"},{"group":[{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-53","operator":"==","type":"custom","value":"undefined"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-78","logicalOperator":"||","operator":"==","type":"custom","value":""}],"id":"state-new-group-54","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:ban","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"error"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"action","elementLabel":"Block-1-Action-2","key":"element_element_block_0_0_action_2_0","name":"Action","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"isActionValid","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"true"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-13","logicalOperator":"&&","operator":"!=","type":"custom","value":"undefined"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-26","logicalOperator":"&&","operator":"!=","type":"custom","value":""}],"id":"state-condition-object","isParent":true},"iconColor":"#2E844A","iconOnly":true,"iconSize":"small","record":"{record}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"{actionMessage}","eventName":"setValues","id":"flex-action-1634557758881","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"utility:success"},"stateObj":"{record}"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"iconColor":"#2E844A","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"container":{"class":""},"elementStyleProperties":{"iconColor":"#2E844A","iconSize":"small"},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"flexIcon","elementLabel":"Block-1-Icon-1-clone-0","key":"element_element_block_0_0_flexIcon_3_0","name":"Icon","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"isActionValid","hasMergeField":false,"id":"state-new-condition-36","operator":"==","type":"custom","value":"true"},{"group":[{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-53","operator":"==","type":"custom","value":"undefined"},{"field":"actionMessage","hasMergeField":false,"id":"state-new-condition-78","logicalOperator":"||","operator":"==","type":"custom","value":""}],"id":"state-new-group-54","logicalOperator":"&&"}],"id":"state-condition-object","isParent":true},"extraclass":"slds-icon_container slds-icon__svg--default ","iconName":"utility:success","iconType":"Salesforce SVG","imgsrc":"","record":"{record}","size":"small","variant":"success"},"size":{"default":"1","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_xxx-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:xxx-small","size":"xxx-small","type":"around"}],"size":{"default":"1","isResponsive":false},"sizeClass":"slds-size_1-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element","userUpdatedElementLabel":true},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-4","key":"element_element_block_0_0_outputField_4_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BgroupName%7D%3C/div%3E","record":"{record}"},"size":{"default":"3","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"3","isResponsive":false},"sizeClass":"slds-size_3-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Text-5","key":"element_element_block_0_0_outputField_5_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BactionMessage%7D%3C/div%3E","record":"{record}"},"size":{"default":"8","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"8","isResponsive":false},"sizeClass":"slds-size_8-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"MSGroupValidationTableEachRow ","container":{"class":"MSGroupValidationTableEachRow"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"MSGroupValidationTableEachRow ","container":{"class":"MSGroupValidationTableEachRow"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-left_xx-small slds-p-right_xx-small ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:xx-small","size":"xx-small","type":"left"},{"label":"right:xx-small","size":"xx-small","type":"right"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"MultiSiteGroupValidationTable","Id":"a3gDn000000x99QQAS","vlocity_cmt__GlobalKey__c":"MultiSiteGroupValidationTable/Vlocity/1/1634125442854"};
  export default definition