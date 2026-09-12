"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, X } from "lucide-react";
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';

interface VideoCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string; // Add thumbnail URL
  timestamp: string;
  transcript: string;
  reviewerName: string;
  rating: number;
}

const videos: VideoCard[] = [
  {
    id: 1,
    title: "FULLY RELEASED",
    subtitle: "Massage + Contrast Therapy",
    description: "Massage, sauna, and ice bath — knots released, body fully relaxed.",
    videoUrl: "https://res.cloudinary.com/dj7bot2uc/video/upload/v1785287652/TEST_1_V3_rzqttr.mov",
    thumbnailUrl: "",
    timestamp: "0:30",
    transcript:
      "Massage was really good — he released all my knots. And then after that, the sauna also really made me feel great and relaxing. And then after that the ice bath also. I feel fully released now. It was a good massage.",
    reviewerName: "R3boot Client",
    rating: 5,
  },
  {
    id: 2,
    title: "SOLID CONTRAST THERAPY",
    subtitle: "Recovery Enthusiast",
    description: "Tried many recovery methods — contrast therapy at R3BOOT felt different.",
    videoUrl: "https://res.cloudinary.com/dj7bot2uc/video/upload/v1785287687/TEST_5_V2_ugfhth.mov",
    thumbnailUrl: "",
    timestamp: "0:35",
    transcript:
      "So honestly, I'm someone who's literally tried out a lot of recovery methods, and contrast therapy is something I've also tried, but I haven't done it regularly. And having said that, I've tried it today and it's been solid. The body really feels a lot of difference. And I've done it at R3BOOT today — it's an amazing experience, and I'd recommend for everybody who is really living a consistent life in terms of your movement and fitness. It's definitely recommended.",
    reviewerName: "R3boot Client",
    rating: 5,
  },
  {
    id: 3,
    title: "PERFECT TO THE POINTS",
    subtitle: "Physiotherapy Client",
    description: "Targeted work on exact pain points — warmth and blood flow returning.",
    videoUrl: "https://res.cloudinary.com/dj7bot2uc/video/upload/v1785287711/TEST_3_4_xscxvb.mov",
    thumbnailUrl: "",
    timestamp: "0:35",
    transcript:
      "Perfect to the points. I'm known to tell where exactly what is paining, and exactly those points around that they were working. And I can feel the difference — when I came before and right now as I'm seated, I know there is blood flowing already. And these exercises which were stretching my back, the curvatures — I can feel the warmth because the blood is now flowing. So I understand how much stiff I have been.",
    reviewerName: "R3boot Client",
    rating: 5,
  },
  {
    id: 4,
    title: "MORE MOBILITY, MORE EASE",
    subtitle: "Dr. Charu",
    description: "Physio session with Dr. Nimble — joints opened, more space to move.",
    videoUrl: "https://res.cloudinary.com/dj7bot2uc/video/upload/v1785287722/test_2_v2_vrkdhf.mov",
    thumbnailUrl: "",
    timestamp: "0:35",
    transcript:
      "Hi, I'm Doctor Charu. I just took a session from Doctor Nimble in R3BOOT — a physio session — and I thought I didn't have any issues. But when he started cracking, opening my joints, I found that so many joints were stiff. And he did a full chiropractic session with me, and I have so much more mobility and so much more ease in my body, and more space that I can do a lot of exercises now.",
    reviewerName: "Dr. Charu",
    rating: 5,
  },
  {
    id: 5,
    title: "RESTORE. REBUILD. RECOVER.",
    subtitle: "Kinita Kadakia Patel",
    description: "Metabolic Reset & Body Transformation specialist on why R3BOOT matters.",
    videoUrl: "https://res.cloudinary.com/dj7bot2uc/video/upload/v1785287919/Test_5_v3_suk1z2.mov",
    thumbnailUrl: "",
    timestamp: "0:40",
    transcript:
      "Hi, I'm Kinita Kadakia Patel. I am a Metabolic Reset and a Body Transformation specialist, and today I'm here at R3BOOT, which is a fantastic space of restore, rebuild and recover. This is that one element in the process of sports and recovery which is usually underrated. So I'm very excited for and for starting this space called R3BOOT. Please come if you are going through any kind of sports injuries, rehab, recovery, conditioning — this is the place where you want to come.",
    reviewerName: "Kinita Kadakia Patel",
    rating: 5,
  },
];

// Helper function to generate Cloudinary thumbnail URL from video URL
// Converts video URL to image thumbnail by adding transformations
const getCloudinaryThumbnail = (videoUrl: string): string => {
  // Example: https://res.cloudinary.com/dj7bot2uc/video/upload/v1769068730/Testimonial_1_1_w7kd2v.mp4
  // Becomes: https://res.cloudinary.com/dj7bot2uc/video/upload/so_0,w_600,h_900,c_fill,q_auto,f_jpg/v1769068730/Testimonial_1_1_w7kd2v.jpg
  try {
    const url = new URL(videoUrl);
    const pathParts = url.pathname.split('/');

    // Find the 'upload' index and insert transformations after it
    const uploadIndex = pathParts.findIndex(part => part === 'upload');
    if (uploadIndex !== -1) {
      // Insert transformation after 'upload'
      pathParts.splice(uploadIndex + 1, 0, 'so_0,w_600,h_900,c_fill,q_auto,f_jpg');
    }

    // Change file extension from .mp4/.mov/.webm to .jpg
    const lastPart = pathParts[pathParts.length - 1];
    pathParts[pathParts.length - 1] = lastPart.replace(/\.(mp4|mov|webm)$/i, '.jpg');

    url.pathname = pathParts.join('/');
    return url.toString();
  } catch {
    // Fallback: return original URL if parsing fails
    return videoUrl;
  }
};

// Helper function to optimize video URL for Safari streaming
// Adds H.264 codec and streaming profile for proper byte-range support
const getOptimizedVideoUrl = (videoUrl: string): string => {
  // Safari requires proper byte-range streaming support for larger videos
  // Cloudinary transformations: vc_h264 (H.264 codec), q_auto (auto quality), f_mp4 (MP4 format)
  try {
    const url = new URL(videoUrl);
    const pathParts = url.pathname.split('/');

    // Find the 'upload' index and insert optimizations after it
    const uploadIndex = pathParts.findIndex(part => part === 'upload');
    if (uploadIndex !== -1) {
      // Insert streaming-optimized transformation
      // vc_h264 = H.264 codec (Safari preferred)
      // q_auto = automatic quality
      // f_mp4 = MP4 format
      pathParts.splice(uploadIndex + 1, 0, 'vc_h264,q_auto,f_mp4');
    }

    url.pathname = pathParts.join('/');
    return url.toString();
  } catch {
    // Fallback: return original URL if parsing fails
    return videoUrl;
  }
};

// Duplicate data for seamless looping (multi-copy for bi-directional loop)
const COPIES = 4;
const duplicatedVideos = Array.from({ length: COPIES }).flatMap(() => videos);

export default function ReviewVideo() {
  // Add CSS for line-clamp utility
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);
  const [videoKey, setVideoKey] = useState<number>(0); // Key to force video element recreation

  const containerRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const translateX = useRef(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false); // Track if user actually moved during drag
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const totalWidth = useRef(0);
  const scrollSpeed = 0.5; // Adjust speed as needed

  // Calculate width of one logical set and position to middle copy for bi-directional scroll
  const calculateWidth = useCallback(() => {
    if (!containerRef.current) return;
    const fullScrollWidth = containerRef.current.scrollWidth;
    totalWidth.current = fullScrollWidth / COPIES;
    // Start at second copy so we can go both directions seamlessly
    translateX.current = -totalWidth.current;
    containerRef.current.style.transform = `translateX(${translateX.current}px)`;
  }, []);

  // Keep translateX within bounds across both directions
  const wrapTranslateX = useCallback(() => {
    if (!containerRef.current) return;
    if (translateX.current >= 0) {
      translateX.current -= totalWidth.current;
    }
    if (translateX.current <= -totalWidth.current * (COPIES - 1)) {
      translateX.current += totalWidth.current;
    } else if (translateX.current <= -totalWidth.current) {
      while (translateX.current <= -totalWidth.current * 2) {
        translateX.current += totalWidth.current;
      }
    }
  }, []);

  // Animation Loop
  const animate = useCallback(() => {
    if (!isPaused && !isDragging.current && containerRef.current) {
      translateX.current -= scrollSpeed;
      wrapTranslateX();
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, wrapTranslateX]);

  // Handle Pointer Events (Mouse & Touch)
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    hasDragged.current = false; // Reset drag flag
    setIsPaused(true);
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    startX.current = clientX;
    scrollLeft.current = translateX.current;
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const walk = (clientX - startX.current) * 2; // Adjust sensitivity

    // Mark as dragged if moved more than 5 pixels
    if (Math.abs(clientX - startX.current) > 5) {
      hasDragged.current = true;
    }

    translateX.current = scrollLeft.current + walk;
    wrapTranslateX();
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    // Keep hasDragged.current as is - will be checked when click fires
  };

  // Handle wheel events for trackpad/trackball horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    // Check if it's a horizontal scroll (deltaX) or vertical scroll (deltaY)
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);

    if (isHorizontalScroll) {
      // Only handle horizontal scroll - prevent default and scroll
      e.preventDefault();
      e.stopPropagation();

      const scrollAmount = e.deltaX * 0.5; // Adjust sensitivity
      translateX.current -= scrollAmount;

      // Infinite scroll - seamless looping in both directions
      wrapTranslateX();

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${translateX.current}px)`;
      }
    }
    // Ignore vertical scrolling - let it work normally for page scrolling
  };


  // Handle play button click
  const handlePlayClick = (video: VideoCard) => {
    // Don't open modal if user was dragging/swiping
    if (hasDragged.current) {
      hasDragged.current = false; // Reset for next interaction
      return;
    }
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  // Handle modal close - properly cleanup video for Safari
  const handleCloseModal = () => {
    // First, stop and cleanup the video element
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.removeAttribute('src');
      modalVideoRef.current.load(); // Reset the video element
    }
    setIsModalOpen(false);
    setSelectedVideo(null);
    setIsVideoLoading(true);
    // Increment key to force new video element on next open
    setVideoKey(prev => prev + 1);
  };


  // Start Animation & Recalculate on Resize
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    animationRef.current = requestAnimationFrame(animate);

    // Add wheel event listener to prevent browser navigation only for horizontal scroll
    const handleWheelCapture = (e: WheelEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        // Only prevent default for horizontal scrolling
        const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (isHorizontalScroll) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    // Use passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheelCapture, { passive: false });

    return () => {
      window.removeEventListener("resize", calculateWidth);
      document.removeEventListener('wheel', handleWheelCapture);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, calculateWidth]);


  return (
    <>
      <section className="w-full bg-white dark:bg-[#0A0A0A] py-8 sm:py-10 md:py-16 lg:py-20 xl:py-10 xl:pt-20 overflow-hidden relative transition-colors duration-500">

        <div className="w-full relative z-10">
          {/* Section Heading */}
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 text-[#513394] dark:text-[#A78BFA] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
              <span className="text-[13px] font-bold tracking-[0.3em] uppercase">Testimonials</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#513394] dark:bg-[#A78BFA]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#1A1A1A] dark:text-white tracking-tight leading-[1.1]">
              Real Stories, <span className="text-[#513394] dark:text-[#A78BFA]">Real Results</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              Experience the transformation through the words of our members.
            </p>
          </Reveal>
          {/* Scrolling Video Container */}
          <div
            className="mt-12 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onWheel={handleWheel}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#0A0A0A] sm:w-40 lg:w-44" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#0A0A0A] sm:w-40 lg:w-44" />

            <div
              ref={containerRef}
              className="flex w-max will-change-transform cursor-grab active:cursor-grabbing gap-6"
            >
              {duplicatedVideos.map((video, index) => {
                const videoId = `${index}-${video.id}`;

                return (
                  <VideoCard
                    key={videoId}
                    video={video}
                    videoId={videoId}
                    onPlayClick={handlePlayClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-2 sm:p-4">
          <div className="relative max-w-5xl w-full max-h-[95vh] bg-white rounded-2xl overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              aria-label="Close video"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0">
              {/* Video Content */}
              <div className="lg:col-span-2 relative flex-shrink-0">
                {/* Loading Spinner */}
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                {/* Video with unique key to force recreation for Safari */}
                <video
                  key={`modal-video-${videoKey}-${selectedVideo.id}`}
                  ref={modalVideoRef}
                  className="w-full h-auto max-h-[50vh] lg:max-h-[90vh] object-contain bg-black"
                  controls
                  autoPlay
                  muted
                  playsInline
                  // @ts-ignore - webkit-playsinline for iOS Safari
                  webkit-playsinline="true"
                  preload="none"
                  onLoadStart={() => setIsVideoLoading(true)}
                  onLoadedData={() => {
                    setIsVideoLoading(false);
                    // Unmute after a short delay for Safari autoplay policy compliance
                    if (modalVideoRef.current) {
                      // Small delay to ensure autoplay starts
                      setTimeout(() => {
                        if (modalVideoRef.current) {
                          modalVideoRef.current.muted = false;
                        }
                      }, 100);
                    }
                  }}
                  onCanPlay={() => {
                    setIsVideoLoading(false);
                    // Ensure video plays when ready
                    if (modalVideoRef.current) {
                      modalVideoRef.current.play().catch(() => {
                        console.log('Autoplay prevented by browser');
                      });
                    }
                  }}
                  onError={() => setIsVideoLoading(false)}
                >
                  {/* Safari-optimized video source with H.264 codec */}
                  <source src={getOptimizedVideoUrl(selectedVideo.videoUrl)} type="video/mp4" />
                  {/* Fallback to original URL */}
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Review Details Sidebar */}
              <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {[...Array(selectedVideo.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Reviewer Info */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{selectedVideo.reviewerName}</h3>
                    <p className="text-base text-[#513394] font-semibold">{selectedVideo.title}</p>
                    <p className="text-sm text-gray-600">{selectedVideo.subtitle}</p>
                  </div>

                  {/* Full Transcript */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">What They Said</h4>
                    <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-white/30 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        &quot;{selectedVideo.transcript}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fixed Call to Action Button at Bottom */}
                <div className="mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
                  <a
                    href="tel:+919702368612"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCloseModal()}
                    className="block w-full bg-[#513394] hover:bg-[#412975] text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                  >
                    Book Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// VideoCard component - Using Cloudinary image thumbnails instead of video elements
// This fixes Safari's limitation of only loading 4-6 videos simultaneously
const VideoCard: React.FC<{
  video: VideoCard;
  videoId: string;
  onPlayClick: (video: VideoCard) => void;
}> = ({ video, onPlayClick }) => {
  // Generate thumbnail URL from Cloudinary video URL
  const thumbnailUrl = video.thumbnailUrl || getCloudinaryThumbnail(video.videoUrl);

  return (
    <div
      className="flex-shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden h-[400px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[520px] w-[250px] sm:w-[350px] md:w-[320px] lg:w-[380px] xl:w-[330px] group mx-2 hover:translate-y-[-10px] mt-[10px] duration-300 transition-all shadow-lg select-none cursor-pointer"
      data-card="true"
      draggable={false}
      onClick={() => onPlayClick(video)}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
    >
      {/* Image Thumbnail - Using Cloudinary auto-generated thumbnail from video */}
      {/* This is more reliable than video elements, especially for Safari */}
      <Image
        src={thumbnailUrl}
        alt={`${video.reviewerName} - ${video.title}`}
        fill
        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, (max-width: 1024px) 320px, (max-width: 1280px) 380px, 330px"
        draggable={false}
        priority={false}
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Play Button - Clickable */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPlayClick(video);
        }}
        aria-label={`Play ${video.reviewerName}'s review`}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group-hover:scale-110 z-20"
      >
        <Play className="w-8 h-8" fill="white" />
      </button>

      {/* Text Review Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 select-none">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-2 select-none">
          {[...Array(video.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Reviewer Name and Title */}
        <div className="mb-2 select-none">
          <p className="font-bold text-sm sm:text-base mb-1 select-none">{video.reviewerName}</p>
          <p className="text-xs sm:text-sm text-gray-200 font-medium select-none">{video.title}</p>
        </div>

        {/* Transcript Preview */}
        <div className="relative select-none">
          <p className="text-xs sm:text-sm leading-relaxed line-clamp-3 opacity-90 select-none">
            &quot;{video.transcript}&quot;
          </p>

          {/* Read More Gradient */}
          <div className="absolute bottom-0 right-0 w-8 h-4 bg-gradient-to-l from-black/80 to-transparent" />
        </div>

        {/* Hover State - Brief Preview */}
        <div className="absolute inset-0 bg-black/90 pt-8 pb-10 px-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center select-none">
          <div className="text-center select-none">
            <div className="flex items-center justify-center gap-1 mb-2 select-none">
              {[...Array(video.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-bold text-base mb-1 select-none">{video.reviewerName}</p>
            <p className="text-xs text-gray-300 mb-2 select-none">{video.title}</p>
            <p className="text-xs leading-relaxed text-gray-200 line-clamp-2 mb-3 select-none">
              &quot;{video.transcript.length > 80 ? video.transcript.substring(0, 80) + '...' : video.transcript}&quot;
            </p>
            <div className="mt-1 flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayClick(video);
                }}
                className="bg-[#513394] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#412975] transition-colors duration-200 select-none shadow-lg"
              >
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
