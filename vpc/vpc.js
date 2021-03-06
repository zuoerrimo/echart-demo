let nodes = [{
   id: "0",
    name: '未知',
    size: 44,
    value:200,
}, {
    id: "1",
    name: 'vpc-1',
    size: 44,
    value: 500, 
}, {
    id: "2",
    name: 'vpc-2',
    value: 201,
    size: 24,
}, {
    id: "3",
    name: 'vpc-3',
    value: 1000,
    size: 34,
}, {
    id: "4",
    name: 'vpc-4',
    value: 1005,
    size: 34,
}]



function genNodes() {
 return _.map(nodes, (node, index) => {
    return {
         id: node.id,
         name: node.name,
         symbol: node.symbol || 'circle',
         symbolSize: node.size,
         value: node.value,
         label: {
            show: true
        },
        itemStyle: {
            opacity: node.opacity || 1,
            color: node.color
        }
    }
 })
}

let links = [{
    source: '0',
    target: '1',
    type: 'dashed',
}, {
    source: '1',
    target: '2',
    opacity: 0.1,
}, {
    source: '1',
    target: '3',
}, {
    source: '2',
    target: '3',
}, {
    source: '2',
    target: '4',
}]
function genLinks() {
    return _.map(links, link => {
        let lineColor = 'green'
        let lineWidth = 1
        if(link.type && link.type === 'dashed') {
            lineColor = 'black'
            lineWidth = 1
        } else {
            lineColor = 'green'
            lineWidth = 3
        }
        return {
            source: link.source,
            target: link.target,
            lineStyle: {
                normal: {
                   type: link.type || 'solid',
                   opacity: link.opacity || 1,
                   width: lineWidth,
                   color: lineColor, 
                   curveness: 0.4
               }
            },
        }
    })
}

option = {
    tooltip: {
        enterable: true,
        backgroundColor: 'gray',
        formatter: function(params) {
            if(params.dataType === 'edge') {
                return '悬浮到连线'
            } else if (params.dataType === 'node') {
                return '悬浮到node'
            }
        },
    },
    visualMap: {
      type: 'continuous',                                                                                                                         
      min: 200,                                                                      
      max: 1024,                                                                     
      text:['1M', '200K'],                                                           
      realtime: false,                                                               
      precision: 0.01,                                                               
      top: 10,                                                                       
      right: 10,                                                                     
      calculable : true,
      color: ['#28004D', '#B15BFF','#BE77FF']  
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
    {
        type: 'graph',
        layout: 'force',
        symbolSize: 100,
        roam: true,
         focusNodeAdjacency: true, //划过只显示对应关系
        label: {
            normal: {
                show:true,
                formatter:  function( data ) {
                    return data.name
                },
            }
        },
            // edgeSymbol: ['arrow'],
            edgeSymbolSize: [10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            nodes: genNodes(), 
            links: genLinks(),
            animation:true,
            markArea:{
                animation:false
            },
            force: {
                repulsion:[0, 500],
                edgeLength: [0, 200],
                layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0
                }
            }
            ]
        };