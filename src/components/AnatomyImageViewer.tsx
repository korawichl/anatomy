import React, { useState, useEffect, useRef } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  X,
  Eye,
  HelpCircle,
  CheckCircle2,
  Move,
  Sparkles
} from 'lucide-react';
import { AnatomicalLandmarkLabel } from '../types';

interface AnatomyImageViewerProps {
  imageUrl?: string;
  labeledImageUrl?: string;
  imageCaption?: string;
  imageLabels?: AnatomicalLandmarkLabel[];
  showSolution?: boolean;
  compact?: boolean;
}

export const AnatomyImageViewer: React.FC<AnatomyImageViewerProps> = ({
  imageUrl,
  labeledImageUrl,
  imageCaption,
  imageLabels,
  showSolution = false,
  compact = false
}) => {
  const [viewMode, setViewMode] = useState<'exam' | 'labeled'>(showSolution && labeledImageUrl ? 'labeled' : 'exam');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showLegendTable, setShowLegendTable] = useState(true);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (showSolution && labeledImageUrl) {
      setViewMode('labeled');
    } else {
      setViewMode('exam');
    }
  }, [showSolution, labeledImageUrl, imageUrl]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === '+' || e.key === '=') {
        setZoom(z => Math.min(z + 0.25, 3.5));
      } else if (e.key === '-') {
        setZoom(z => Math.max(z - 0.25, 0.75));
      } else if (e.key === '0') {
        setZoom(1);
        setPan({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  if (!imageUrl) return null;

  const activeImageSrc =
    viewMode === 'labeled' && labeledImageUrl ? labeledImageUrl : imageUrl;

  const handleOpenLightbox = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsLightboxOpen(true);
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.3, 3.5));
  const handleZoomOut = () => {
    setZoom(prev => {
      const next = Math.max(prev - 0.3, 0.75);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom(prev => Math.min(prev + 0.2, 3.5));
    } else {
      setZoom(prev => {
        const next = Math.max(prev - 0.2, 0.75);
        if (next <= 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="my-5 rounded-2xl border-2 border-indigo-100 bg-gradient-to-b from-slate-50 to-white shadow-sm overflow-hidden">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Medical Vector Atlas
          </span>
          {viewMode === 'labeled' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              ภาพเฉลยโครงสร้างครบทุกจุด (Master Labeled)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-400/30">
              <HelpCircle className="w-3.5 h-3.5" />
              ภาพโจทย์สอบระบุตำแหน่ง [A]–[F]
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {showSolution && labeledImageUrl && (
            <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setViewMode('labeled')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                  viewMode === 'labeled'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                ดูภาพเฉลยครบทุกจุด
              </button>
              <button
                type="button"
                onClick={() => setViewMode('exam')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
                  viewMode === 'exam'
                    ? 'bg-rose-600 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                ดูภาพโจทย์ [A–F]
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleOpenLightbox}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            ขยายเต็มจอ / ซูมภาพ
          </button>
        </div>
      </div>

      {/* Inline Diagram Preview */}
      <div
        onClick={handleOpenLightbox}
        className="relative group cursor-zoom-in bg-slate-100/70 flex items-center justify-center p-2 sm:p-4"
        title="คลิกเพื่อขยายภาพเต็มจอและซูมดูรายละเอียด"
      >
        <img
          src={activeImageSrc}
          alt={imageCaption || 'Anatomical Diagram'}
          className={`w-full h-auto rounded-xl border border-slate-200 shadow-sm transition-transform duration-200 group-hover:scale-[1.01] ${
            compact ? 'max-h-[340px] object-contain' : 'max-h-[460px] object-contain'
          }`}
        />
        <div className="absolute bottom-4 right-4 opacity-90 group-hover:opacity-100 transition-opacity bg-slate-900/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg pointer-events-none">
          <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
          คลิกที่ภาพเพื่อขยายเต็มจอ & ซูม (Zoom & Pan)
        </div>
      </div>

      {/* Caption */}
      {imageCaption && (
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
          <span className="font-medium">📐 {imageCaption}</span>
          {showSolution && imageLabels && imageLabels.length > 0 && (
            <button
              type="button"
              onClick={() => setShowLegendTable(prev => !prev)}
              className="text-indigo-600 hover:text-indigo-800 font-bold underline cursor-pointer ml-2 shrink-0"
            >
              {showLegendTable ? 'ซ่อนตารางจุดชี้ [A–F]' : 'แสดงตารางจุดชี้ [A–F]'}
            </button>
          )}
        </div>
      )}

      {/* Complete Landmark Legend Table in Solution / Review Mode */}
      {showSolution && showLegendTable && imageLabels && imageLabels.length > 0 && (
        <div className="p-4 bg-emerald-50/40 border-t border-emerald-100">
          <div className="flex items-center gap-2 mb-2.5">
            <Eye className="w-4 h-4 text-emerald-600" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              ตารางสรุปจุดชี้ตำแหน่งทางกายวิภาคทั้งหมดในภาพ ([A] – [F] Complete Landmark Key)
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {imageLabels.map(lbl => (
              <div
                key={lbl.pin}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-emerald-200/80 shadow-xs"
              >
                <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {lbl.pin}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 leading-snug">
                    {lbl.term}
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {lbl.thaiName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal with Zoom & Pan */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col animate-fadeIn"
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Lightbox Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-900 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3 min-w-0">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-xs font-bold shrink-0">
                Interactive Atlas
              </span>
              <h3 className="text-sm sm:text-base font-bold truncate text-slate-100">
                {imageCaption || 'Anatomical Diagram Viewer'}
              </h3>
            </div>

            {/* Lightbox Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {showSolution && labeledImageUrl && (
                <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700 mr-2">
                  <button
                    type="button"
                    onClick={() => setViewMode('labeled')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      viewMode === 'labeled'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    ✓ ภาพเฉลยครบทุกจุด (Master)
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('exam')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      viewMode === 'exam'
                        ? 'bg-rose-600 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    ❓ ภาพโจทย์สอบ [A–F]
                  </button>
                </div>
              )}

              <div className="inline-flex items-center rounded-lg bg-slate-800 border border-slate-700 p-1 gap-1">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="ซูมออก (-)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2.5 text-xs font-mono font-bold text-indigo-300 min-w-[54px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                  title="ซูมเข้า (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer border-l border-slate-700 ml-1 pl-2"
                  title="รีเซ็ตขนาด (100%)"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors cursor-pointer ml-1"
              >
                <X className="w-4 h-4" />
                ปิดหน้าต่าง (ESC)
              </button>
            </div>
          </div>

          {/* Interactive Zoom & Pan Canvas */}
          <div
            className={`flex-1 overflow-hidden relative flex items-center justify-center select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <img
              src={activeImageSrc}
              alt={imageCaption || 'Anatomical Diagram'}
              draggable={false}
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              className="max-w-[92vw] max-h-[82vh] w-auto h-auto rounded-2xl shadow-2xl border-2 border-slate-700 bg-white pointer-events-none"
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-xs flex items-center gap-2 shadow-xl pointer-events-none">
              <Move className="w-3.5 h-3.5 text-indigo-400" />
              <span>หมุนลูกกลิ้งเมาส์เพื่อซูม (Scroll to Zoom) • คลิกค้างแล้วลากเพื่อเลื่อนดูจุดต่างๆ (Drag to Pan)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
