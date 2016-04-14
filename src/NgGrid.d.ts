import { ElementRef, Renderer, EventEmitter, DynamicComponentLoader, KeyValueDiffers, OnInit, OnDestroy, DoCheck } from 'angular2/core';
export interface NgGridConfig {
    margins?: number[];
    draggable?: boolean;
    resizable?: boolean;
    max_cols?: number;
    max_rows?: number;
    visible_cols?: number;
    visible_rows?: number;
    min_cols?: number;
    min_rows?: number;
    col_width?: number;
    row_height?: number;
    cascade?: string;
    min_width?: number;
    min_height?: number;
    fix_to_grid?: boolean;
    auto_style?: boolean;
    auto_resize?: boolean;
}
export declare class NgGrid implements OnInit, DoCheck, OnDestroy {
    private _differs;
    private _ngEl;
    private _renderer;
    private _loader;
    dragStart: EventEmitter<NgGridItem>;
    drag: EventEmitter<NgGridItem>;
    dragStop: EventEmitter<NgGridItem>;
    resizeStart: EventEmitter<NgGridItem>;
    resize: EventEmitter<NgGridItem>;
    resizeStop: EventEmitter<NgGridItem>;
    itemChange: EventEmitter<Array<NgGridItemEvent>>;
    colWidth: number;
    rowHeight: number;
    minCols: number;
    minRows: number;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    isDragging: boolean;
    isResizing: boolean;
    autoStyle: boolean;
    resizeEnable: boolean;
    dragEnable: boolean;
    cascade: string;
    private _items;
    private _draggingItem;
    private _resizingItem;
    private _resizeDirection;
    private _itemGrid;
    private _containerWidth;
    private _containerHeight;
    private _maxCols;
    private _maxRows;
    private _visibleCols;
    private _visibleRows;
    private _minWidth;
    private _minHeight;
    private _setWidth;
    private _setHeight;
    private _posOffset;
    private _adding;
    private _placeholderRef;
    private _fixToGrid;
    private _autoResize;
    private _differ;
    private _destroyed;
    private static CONST_DEFAULT_CONFIG;
    private _config;
    config: NgGridConfig;
    constructor(_differs: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer, _loader: DynamicComponentLoader);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setConfig(config: NgGridConfig): void;
    getItemPosition(index: number): {
        col: number;
        row: number;
    };
    getItemSize(index: number): {
        x: number;
        y: number;
    };
    ngDoCheck(): boolean;
    setMargins(margins: Array<string>): void;
    enableDrag(): void;
    disableDrag(): void;
    enableResize(): void;
    disableResize(): void;
    addItem(ngItem: NgGridItem): void;
    removeItem(ngItem: NgGridItem): void;
    updateItem(ngItem: NgGridItem): void;
    triggerCascade(): void;
    private _onResize(e);
    private _applyChanges(changes);
    private _onMouseDown(e);
    private _resizeStart(e);
    private _dragStart(e);
    private _onMouseMove(e);
    private _drag(e);
    private _resize(e);
    private _onMouseUp(e);
    private _dragStop(e);
    private _resizeStop(e);
    private _maxGridSize(w, h);
    private _calculateGridSize(width, height);
    private _calculateGridPosition(left, top);
    private _hasGridCollision(pos, dims);
    private _getCollisions(pos, dims);
    private _fixGridCollisions(pos, dims);
    private _cascadeGrid(pos?, dims?);
    private _fixGridPosition(pos, dims);
    private _isWithinBoundsX(pos, dims);
    private _isWithinBoundsY(pos, dims);
    private _isWithinBounds(pos, dims);
    private _addToGrid(item);
    private _removeFromGrid(item);
    private _updateSize(col?, row?);
    private _filterGrid();
    private _getMaxRow();
    private _getMaxCol();
    private _getMousePosition(e);
    private _getAbsoluteMousePosition(e);
    private _getItemFromPosition(position);
    private _createPlaceholder(pos, dims);
}
export interface NgGridItemConfig {
    col?: number;
    row?: number;
    sizex?: number;
    sizey?: number;
    dragHandle?: string;
    resizeHandle?: string;
    fixed?: boolean;
    draggable?: boolean;
    resizable?: boolean;
    borderSize?: number;
}
export interface NgGridItemEvent {
    col: number;
    row: number;
    sizex: number;
    sizey: number;
    width: number;
    height: number;
    left: number;
    top: number;
}
export declare class NgGridItem implements OnInit, OnDestroy {
    private _ngEl;
    private _renderer;
    private _ngGrid;
    itemChange: EventEmitter<NgGridItemEvent>;
    dragStart: EventEmitter<NgGridItemEvent>;
    drag: EventEmitter<NgGridItemEvent>;
    dragStop: EventEmitter<NgGridItemEvent>;
    resizeStart: EventEmitter<NgGridItemEvent>;
    resize: EventEmitter<NgGridItemEvent>;
    resizeStop: EventEmitter<NgGridItemEvent>;
    private static CONST_DEFAULT_CONFIG;
    gridPosition: {
        'col': number;
        'row': number;
    };
    gridSize: {
        'x': number;
        'y': number;
    };
    isFixed: boolean;
    isDraggable: boolean;
    isResizable: boolean;
    private _col;
    private _row;
    private _sizex;
    private _sizey;
    private _config;
    private _dragHandle;
    private _resizeHandle;
    private _borderSize;
    private _elemWidth;
    private _elemHeight;
    private _elemLeft;
    private _elemTop;
    private _added;
    config: NgGridItemConfig;
    constructor(_ngEl: ElementRef, _renderer: Renderer, _ngGrid: NgGrid);
    ngOnInit(): void;
    canDrag(e: any): boolean;
    canResize(e: any): string;
    onMouseMove(e: any): void;
    ngOnDestroy(): void;
    getElement(): ElementRef;
    getDragHandle(): string;
    getResizeHandle(): string;
    getDimensions(): {
        width: number;
        height: number;
    };
    getSize(): {
        x: number;
        y: number;
    };
    getPosition(): {
        left: number;
        top: number;
    };
    getGridPosition(): {
        col: number;
        row: number;
    };
    setConfig(config: NgGridItemConfig): void;
    setSize(x: number, y: number): void;
    setGridPosition(col: number, row: number): void;
    getEventOutput(): NgGridItemEvent;
    setPosition(x: number, y: number): void;
    setDimensions(w: number, h: number): void;
    startMoving(): void;
    stopMoving(): void;
    recalculateSelf(): void;
    private _recalculatePosition();
    private _recalculateDimensions();
    private _getMousePosition(e);
}
export declare class NgGridPlaceholder implements OnInit {
    private _ngEl;
    private _renderer;
    private _ngGrid;
    private _sizex;
    private _sizey;
    private _col;
    private _row;
    constructor(_ngEl: ElementRef, _renderer: Renderer, _ngGrid: NgGrid);
    ngOnInit(): void;
    setSize(x: number, y: number): void;
    setGridPosition(col: number, row: number): void;
    private _setPosition(x, y);
    private _setDimensions(w, h);
    private _recalculatePosition();
    private _recalculateDimensions();
}
