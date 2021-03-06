/**
 * @author chenyanxu
 */
Ext.define('kalix.attachment.view.AttachmentGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.attachment.controller.AttachmentGridController',
        'kalix.attachment.store.AttachmentStore',
        'kalix.attachment.view.AttachmentForm'
    ],
    alias: 'widget.attachmentGrid',
    xtype: 'attachmentGrid',
    autoLoad: false,
    controller: {
        type: 'attachmentGridController'
    },
    viewModel:Ext.create('Ext.app.ViewModel'),
    store: {
        type: 'attachmentStore'
    },
    height:460,
    columns: {
        defaults: {flex: 1,renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '名称',
                dataIndex: 'attachmentName'
            },
            {
                text: '类型',
                dataIndex: 'attachmentType'
            },
            {
                text: '大小(MB)',
                xtype:'templatecolumn',
                tpl:'<tpl>{[(values.attachmentSize/1048576).toFixed(3)]}</tpl>',
                renderer: null
            },
            {
                text: '上传日期',
                dataIndex: 'uploadDate',
                xtype: 'datecolumn',
                format: 'Y-m-d H:i',
                renderer: null
            },
            {
                xtype: 'securityGridColumnCommon',
                flex:0,
                width:60,
                items: [
                    {
                        iconCls: 'iconfont icon-download',
                        permission: 'roffice:cmModule:contractMenu:delete',
                        tooltip: '下载',
                        handler: 'onDownload'
                    },
                    {
                        iconCls: 'iconfont icon-delete',
                        permission: 'roffice:cmModule:contractMenu:delete',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        height:35,
        padding:'5 0 0 10',
        verifyItems: [
            {
                xtype: 'attachmentForm',
                permission: ''
            }
        ]
    }
});
