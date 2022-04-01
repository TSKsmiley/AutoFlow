export default function FlowInfo(platform = "", platformActions = [], actionName = "", executeAction = "", contentReq = [], contentOpt = [], optionReq = [], optionOpt = []){

    return {
        flow: {
            routes:[{
                platform: platform,
                platformActions: platformActions,
            }],
            actions: [{
                name: actionName,
                    executeAction: executeAction,
                    content:{
                        requiredFields: contentReq,
                        optionalFields: contentOpt,
                    },
                    options: {
                        requiredFields: optionReq,
                        optionalFields: optionOpt,
                    },
            }]
        }
    }
}
