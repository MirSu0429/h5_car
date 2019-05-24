$(function () {
    $("#tableData").bootstrapTable({
        url : "/registerInfo/queryAllRegister",
        method: "POST",
        clickToSelect: true,    	//是否启用点击选中行
        columns: [
            {field: 'selectItem', radio: true},
            {title: '序号',align: 'center', width:50, formatter:function (value,row,index) {
                    return index+1;
                }
            },
            {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
            {title: '姓名', field: 'name', visible: true, align: 'center', valign: 'middle'},
            //{title: '任务所在组', field: 'jobGroup', visible: true, align: 'center', valign: 'middle'},
            {title: '电话', field: 'tel', visible: true, align: 'center', valign: 'middle'},
            {title: '车牌号', field: 'carNumber', visible: true, align: 'center', valign: 'middle'},
            //{title: '触发器所在组', field: 'triggerGroup', visible: false, align: 'center', valign: 'middle'},
           /* {title: '描述', field: 'jobDesc', visible: false, align: 'center', valign: 'middle'},
            {title: '任务状态', field: 'status', visible: true, align: 'center', valign: 'middle',formatter:function (value) {
                    if (value == 1) {
                        return "运行中"
                    }
                    if (value == 0) {
                        return "已停止"
                    }
                }}*/
        ]
    })
})