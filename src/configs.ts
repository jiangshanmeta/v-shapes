import {
    BoxInfo,
    Shapes,
} from './typings.d'

const shapeConfigs:Record<Shapes, Partial<BoxInfo> > = {
    triangleBottomRight: {
        width: 0,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 100,
        borderLeftWidth: 100,
        borderTopColor: '#ff8c05',
        borderRightColor: '#43a102',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#ffffff',
    },
    triangleBottomLeft: {
        width: 0,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 0,
        borderRightWidth: 100,
        borderBottomWidth: 100,
        borderLeftWidth: 0,
        borderTopColor: '#ff8c05',
        borderRightColor: '#ffffff',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#4499ee',
    },
    triangleTopLeft: {
        width: 0,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 100,
        borderRightWidth: 100,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopColor: '#ff8c05',
        borderRightColor: '#ffffff',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#4499ee',
    },
    triangleTopRight: {
        width: 0,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 100,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 100,
        borderTopColor: '#ff8c05',
        borderRightColor: '#43a102',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#ffffff',
    },
    trapezoid: {
        width: 100,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 0,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftWidth: 50,
        borderTopColor: '#ff8c05',
        borderRightColor: '#ffffff',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#ffffff',
    },
    arrowRight: {
        width: 100,
        height: 100,
        rotate: 45,
        borderRadius: 0,
        borderTopWidth: 30,
        borderRightWidth: 30,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderTopColor: '#ff8c05',
        borderRightColor: '#43a102',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#4499ee',
    },
    triangleRight: {
        width: 0,
        height: 0,
        rotate: 0,
        borderRadius: 0,
        borderTopWidth: 100,
        borderRightWidth: 0,
        borderBottomWidth: 100,
        borderLeftWidth: 173,
        borderTopColor: '#ffffff',
        borderRightColor: '#43a102',
        borderBottomColor: '#ffffff',
        borderLeftColor: '#4499ee',
    },
    agree: {
        width: 80,
        height: 150,
        rotate: 35,
        borderRadius: 0,
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 0,
        borderTopColor: '#ff8c05',
        borderRightColor: '#43a102',
        borderBottomColor: '#c5da01',
        borderLeftColor: '#4499ee',
    },
}

export default shapeConfigs
