export default {
  formData: {
    duration: 5,
    position: 5,
    textFontSize: 16,
    textColor: '#262626',
    textShadow: '0 1px 1px #464646',
    padding: 10
  },
  formConf (formData: any) {
    return {
      duration: {
        label: '自动刷新频率',
        type: 'input-number',
        attrs: {
          'controls-position': 'right',
          min: 1,
          max: 12 * 60,
          style: 'width: 100%'
        },
        tips: '刷新频率,单位为分钟'
      },
      position: {
        label: '对齐方式',
        slot: () => <position-selector vModel={formData.position}></position-selector>
      },
      textFontSize: {
        label: '字体大小',
        slot: () => {
          return (
            <div style="display:flex;align-item: center">
              <el-input-number vModel={formData.textFontSize} controls-position="right" min={12} max={64} style="width: 100px" />
              <span style="margin-left: 10px;font-weight:bold">px</span>
            </div>
          )
        }
      },
      textColor: {
        label: '字体颜色',
        slot: () => <standard-color-picker vModel={formData.textColor} />
      },
      textShadow: {
        label: '字体阴影',
        type: 'input',
        tips: '基于CSS3的text-shadow属性，应输入合法的CSS字体阴影代码片段'
      },
      padding: {
        label: '盒子内边距',
        slot: () => {
          return (
            <div style="display:flex;align-item: center">
              <el-input-number vModel={formData.padding} controls-position="right" min={0} max={256} style="width: 100px" />
              <span style="margin-left: 10px;font-weight:bold">px</span>
            </div>
          )
        }
      }
    }
  },
}