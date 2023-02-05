let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"name\":\"\",\"description\":\"\", \"select\":true, \"submitted\":false, \"add\":false, \"nameChanged\":false, \"descriptionChanged\":false}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1634129754401-m883tdjvh","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"name","fieldValue":"{action.value}"},{"fieldName":"nameChanged","fieldValue":"true"}],"id":"flex-action-1635480902737","type":"cardAction"}}],"channelname":"createGroupName","displayLabel":"createGroupName:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1634129754401-i3jn60t1b","label":"Action","stateAction":{"eventName":"cpq_modify_group","id":"flex-action-1634637352160","message":"close","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}_{Parent.channelType}","displayLabel":"cpq_{recordId}_{Parent.channelType}:cpq_add_new_group_response","element":"action","eventLabel":"pubsub","eventname":"cpq_add_new_group_response","eventtype":"pubsub","key":"event-1","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":false,"isOpen":true,"key":"1634129754401-9z67a4len","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"description","fieldValue":"{action.value}"},{"fieldName":"descriptionChanged","fieldValue":"true"}],"id":"flex-action-1635480915327","type":"cardAction"}}],"channelname":"createGroupDescription","displayLabel":"createGroupDescription:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-2","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":false,"key":"1634129754401-0gtkcbbf4","label":"Action","stateAction":{"actionConditions":{"group":[{"field":"Parent.type","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"create"}],"id":"state-condition-object","isParent":true},"eventName":"cpq_{recordId}_{Parent.channelType}","extraParams":{"groupDescription":"{description}","groupName":"{name}","ipMethod":"MultiSite_CreateNewGroup"},"hasExtraParams":true,"id":"flex-action-1635245708354","message":"cpq_add_new_group","subType":"PubSub","type":"Event"}},{"actionIndex":1,"card":"{card}","draggable":false,"isOpen":true,"key":"1634129758598-4scd0swlq","label":"Action","stateAction":{"actionConditions":{"group":[{"field":"Parent.type","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"update"}],"id":"state-condition-object","isParent":true},"eventName":"cpq_{recordId}_{Parent.channelType}","extraParams":{"groupDescription":"{description}","groupIdToUpdate":"{Parent.updateGroupInfo.groupIdToUpdate}","groupName":"{name}","ipMethod":"MultiSite_UpdateGroup","isRowAction":"{Parent.isRowAction}"},"hasExtraParams":true,"id":"flex-action-1635420301010","message":"multisite_updategroup_click","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}_{Parent.channelType}","displayLabel":"cpq_{recordId}_{Parent.channelType}:modify_group","element":"action","eventLabel":"pubsub","eventname":"modify_group","eventtype":"pubsub","key":"event-3","recordIndex":"0","showSpinner":"false"},{"actionList":[{"actionIndex":0,"card":"{card}","draggable":true,"isOpen":true,"key":"1634637377890-i050g0ala","label":"Action","stateAction":{"displayName":"Action","eventName":"cpq_modify_group","id":"flex-action-1634637377924","message":"close","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":"standard-default"}}],"channelname":"cpq_{recordId}_{Parent.channelType}","displayLabel":"cpq_{recordId}_{Parent.channelType}:cpq_updated_group","element":"action","eventLabel":"pubsub","eventname":"cpq_updated_group","eventtype":"pubsub","key":"event-4","recordIndex":"0","showSpinner":"false"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqMultiSiteCreateGroup_3_Vlocity","Id":"0RbDn000001RZUj0AE","ManageableState":"unmanaged","MasterLabel":"cfCpqMultiSiteCreateGroup_3_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"osSupport":true,"selectableMode":"Multi","sessionVars":[],"states":[{"actions":[],"childCards":[],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-0","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.type","hasMergeField":false,"id":"state-new-condition-30","operator":"==","type":"custom","value":"create"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-heading_large%22%3E%7BLabel.MSNewGroupLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"2"},"class":"slds-text-align_center cpq__multisite-modal-new-group slds-border_bottom slds-p-top_small slds-p-bottom_small ","container":{"class":"cpq__multisite-modal-new-group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"},{"label":"bottom:small","size":"small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 2px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"2"},"class":"slds-text-align_center cpq__multisite-modal-new-group slds-border_bottom slds-p-top_small slds-p-bottom_small ","container":{"class":"cpq__multisite-modal-new-group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"},{"label":"bottom:small","size":"small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 2px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-1","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.type","hasMergeField":false,"id":"state-new-condition-23","operator":"==","type":"custom","value":"update"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%20class=%22slds-text-heading_large%22%3E%7BLabel.MSRenameGroupLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"2"},"class":"slds-text-align_center cpq__multisite-modal-update-group slds-border_bottom slds-p-top_small slds-p-bottom_small ","container":{"class":"cpq__multisite-modal-update-group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"},{"label":"bottom:small","size":"small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 2px solid; \n         ","text":{"align":"center","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"#cccccc","radius":"","style":"","type":"border_bottom","width":"2"},"class":"slds-text-align_center cpq__multisite-modal-update-group slds-border_bottom slds-p-top_small slds-p-bottom_small ","container":{"class":"cpq__multisite-modal-update-group"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:small","size":"small","type":"top"},{"label":"bottom:small","size":"small","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     border-bottom: #cccccc 2px solid; \n         ","text":{"align":"center","color":""}}}],"type":"text"},{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Block-2-Text-2","key":"element_element_element_block_0_0_block_2_0_outputField_0_0","name":"Text","parentElementKey":"element_element_block_0_0_block_2_0","property":{"card":"{card}","data-conditions":{"group":[{"field":"Parent.selectedUngroupedRecordsCount","hasMergeField":false,"id":"state-new-condition-0","operator":">","type":"custom","value":"0"},{"field":"Parent.type","hasMergeField":false,"id":"state-new-condition-37","logicalOperator":"&&","operator":"==","type":"custom","value":"Create"}],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7BParent.selectedUngroupedRecordsCount%7D%20%7BLabel.MSAddSelectedItemsToNewGroupInfoLabel%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-ungrouped-count slds-p-left_small ","container":{"class":"cpq__multisite-ungrouped-count"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:small","size":"small","type":"left"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__multisite-ungrouped-count slds-p-left_small ","container":{"class":"cpq__multisite-ungrouped-count"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"left:small","size":"small","type":"left"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2","key":"element_element_block_0_0_block_2_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_medium slds-p-bottom_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:medium","size":"medium","type":"top"},{"label":"bottom:medium","size":"medium","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_medium slds-p-bottom_medium ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:medium","size":"medium","type":"top"},{"label":"bottom:medium","size":"medium","type":"bottom"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-2-Text-3","key":"element_element_block_0_0_baseInputElement_3_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"name","value":"createGroupName"},{"id":1,"label":"value","value":"{Parent.updateGroupInfo.groupName}"}],"label":"{Label.MSGroupNameLabel}","required":true,"value":"{Parent.updateGroupInfo.groupName}"},"record":"{record}","type":"text"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_name slds-p-right_small slds-p-left_xx-large slds-p-top_medium slds-m-bottom_xx-small ","container":{"class":"cpq__create_group_name"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:xx-large","size":"xx-large","type":"left"},{"label":"top:medium","size":"medium","type":"top"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_name slds-p-right_small slds-p-left_xx-large slds-p-top_medium slds-m-bottom_xx-small ","container":{"class":"cpq__create_group_name"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:xx-large","size":"xx-large","type":"left"},{"label":"top:medium","size":"medium","type":"top"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-2-Text-4","key":"element_element_block_0_0_baseInputElement_4_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"name","value":"createGroupDescription"},{"id":1,"label":"value","value":"{Parent.updateGroupInfo.groupDescription}"}],"label":"{Label.MSGroupDescLabel}","required":false,"value":"{Parent.updateGroupInfo.groupDescription}"},"record":"{record}","type":"text"},"size":{"default":"10","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_desc slds-p-right_small slds-p-left_xx-large slds-p-bottom_xx-large slds-m-bottom_xx-small ","container":{"class":"cpq__create_group_desc"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:xx-large","size":"xx-large","type":"left"},{"label":"bottom:xx-large","size":"xx-large","type":"bottom"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_desc slds-p-right_small slds-p-left_xx-large slds-p-bottom_xx-large slds-m-bottom_xx-small ","container":{"class":"cpq__create_group_desc"},"elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"bottom:xx-small","size":"xx-small","type":"bottom"}],"padding":[{"label":"right:small","size":"small","type":"right"},{"label":"left:xx-large","size":"xx-large","type":"left"},{"label":"bottom:xx-large","size":"xx-large","type":"bottom"}],"size":{"default":"10","isResponsive":false},"sizeClass":"slds-size_10-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[{"children":[{"children":[],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-4","key":"element_element_element_element_block_0_0_block_5_0_block_0_0_block_0_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_5_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 "},"type":"block"},{"children":[{"class":"slds-col ","element":"action","elementLabel":"Block-1-Block-4-Action-0","key":"element_element_element_element_element_block_0_0_block_5_0_block_0_0_block_1_0_action_0_0","name":"Action","parentElementKey":"element_element_element_element_block_0_0_block_5_0_block_0_0_block_1_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"draggable":true,"isOpen":true,"key":"1634635824309-agwy7h6g5","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.MSCancelLabel}","eventName":"cpq_modify_group","id":"flex-action-1634635982476","message":"close","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"}],"buttonVariant":"neutral","card":"{card}","displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"utility:minimize_window","label":"{Label.MSCancelLabel}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_cancel slds-p-right_xxx-small slds-m-right_small custom-btn","container":{"class":"cpq__create_group_cancel"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:small","size":"small","type":"right"}],"padding":[{"label":"right:xxx-small","size":"xxx-small","type":"right"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_cancel slds-p-right_xxx-small slds-m-right_small custom-btn","container":{"class":"cpq__create_group_cancel"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:small","size":"small","type":"right"}],"padding":[{"label":"right:xxx-small","size":"xxx-small","type":"right"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"action","elementLabel":"Block-2-Block-5-Action-0-clone-0","key":"element_element_element_element_element_block_0_0_block_5_0_block_0_0_block_1_0_action_1_0","name":"Action","parentElementKey":"element_element_element_element_block_0_0_block_5_0_block_0_0_block_1_0","property":{"actionList":[{"actionIndex":0,"buttonVariant":"brand","card":"{card}","displayAsButton":true,"draggable":true,"isOpen":false,"key":"1635245578309-5ovs6i30y","label":"Action","record":"{record}","stateAction":{"displayName":"{Label.MSSaveLabel}","eventName":"cpq_{recordId}_{Parent.channelType}","id":"flex-action-1635245579263","message":"modify_group","openUrlIn":"Current Window","subType":"PubSub","type":"Event","vlocityIcon":""},"stateObj":"{record}"},{"actionIndex":1,"card":"{card}","draggable":true,"isOpen":false,"key":"1635480929732-63t9ktyw1","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"actionConditions":{"group":[{"field":"nameChanged","hasMergeField":false,"id":"state-new-condition-0","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"name","fieldValue":"{Parent.updateGroupInfo.groupName}"}],"id":"flex-action-1635480966665","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}},{"actionIndex":2,"card":"{card}","draggable":true,"isOpen":true,"key":"1635480974015-czzt3h51t","label":"Action","stateAction":{"Web Page":{"targetName":"/apex"},"actionConditions":{"group":[{"field":"descriptionChanged","hasMergeField":false,"id":"state-new-condition-7","operator":"==","type":"custom","value":"false"}],"id":"state-condition-object","isParent":true},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"description","fieldValue":"{Parent.updateGroupInfo.groupDescription}"}],"id":"flex-action-1635481001405","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"}}],"buttonVariant":"brand","card":"{card}","displayAsButton":true,"flyoutDetails":{},"hideActionIcon":true,"iconName":"utility:save","label":"{Label.MSSaveLabel}","record":"{record}","showSpinner":"false","stateObj":"{record}"},"size":{"default":"5","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_save slds-p-right_xxx-small slds-m-right_small custom-btn","container":{"class":"cpq__create_group_save"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:small","size":"small","type":"right"}],"padding":[{"label":"right:xxx-small","size":"xxx-small","type":"right"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq__create_group_save slds-p-right_xxx-small slds-m-right_small custom-btn","container":{"class":"cpq__create_group_save"},"customClass":"custom-btn","elementStyleProperties":{},"inlineStyle":"","margin":[{"label":"right:small","size":"small","type":"right"}],"padding":[{"label":"right:xxx-small","size":"xxx-small","type":"right"}],"size":{"default":"5","isResponsive":false},"sizeClass":"slds-size_5-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-5","key":"element_element_element_element_block_0_0_block_5_0_block_0_0_block_1_0","name":"Block","parentElementKey":"element_element_element_block_0_0_block_5_0_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small buttons","container":{"class":""},"customClass":"buttons","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small buttons","container":{"class":""},"customClass":"buttons","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":false},"sizeClass":"slds-size_6-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-3","key":"element_element_element_block_0_0_block_5_0_block_0_0","name":"Block","parentElementKey":"element_element_block_0_0_block_5_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"#F3F2F2","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"background-color:#F3F2F2;      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-6","key":"element_element_block_0_0_block_5_0","name":"Block","parentElementKey":"element_block_0_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_xx-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-large","size":"xx-large","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-top_xx-large ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"top:xx-large","size":"xx-large","type":"top"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card ","container":{"class":"slds-card"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"customClass":"","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false,"large":"12","medium":"12","small":"12"},"sizeClass":"slds-size_12-of-12 ","style":"      \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqMultiSiteCreateGroup","Id":"a3gDn000000x99SQAS","vlocity_cmt__GlobalKey__c":"cpqMultiSiteCreateGroup/Vlocity/3/1635311185858"};
  export default definition