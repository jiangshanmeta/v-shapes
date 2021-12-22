export interface BoxInfo {
    width: number,
    height: number,
    borderRadius: number,
    rotate: number,
    background: string,
    borderTopWidth: number,
    borderRightWidth: number,
    borderBottomWidth: number,
    borderLeftWidth: number,
    borderTopColor: string,
    borderRightColor: string,
    borderBottomColor: string,
    borderLeftColor: string,
}

export type Shapes = 'triangleBottomRight' | 'triangleBottomLeft' | 'triangleTopLeft' | 'triangleTopRight' | 'trapezoid' | 'arrowRight' | 'triangleRight' | 'agree'
