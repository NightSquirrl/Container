## 参数配置说明

App.tsx文件 FreeLayoutEditorProvider 的参数配置

```javascript

// 以下两个必须同时配置,缺一个就会报错
plugin={
[
      createFreeNodePanelPlugin({
        renderer: NodePanel,
      }),
      /**
       * ContextMenu plugin
       */
      createContextMenuPlugin({}),
    ]
}

// history 也必须配置,否则Add node 使用的方法会报错
history={{
      enable: true,
      /**
       * Listen form data change, default true
       */
      enableChangeNode: true,
}}

```


## 添加节点 
 添加节点面板 所在文件 `src\components\tools\index.tsx`
nodePanelService.callNodePanel 弹出面板

`src\components\node-panel\index.tsx` 面板渲染
