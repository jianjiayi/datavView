/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-06-10 14:39:10
 * @LastEditTime: 2020-08-10 15:22:42
 */ 

export default function(option, data) {

  return {
    tooltip: {
      ...option.tooltip,
      // ...tooltip,
    },
    animationDelayUpdate: function (idx) {
      return idx * 5;
    },
    ...option,
    ...data,
  };
}
