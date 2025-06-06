"use client";;
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

const TimelineContext = React.createContext(null);

function useTimeline() {
  const context = React.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a <Timeline />.");
  }

  return context;
}

function Timeline({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    (<TimelineContext value={{ orientation }}>
      <ol
        data-slot="timeline"
        role="list"
        data-orientation={orientation}
        className={cn("flex", orientation === "vertical" && "flex-col", className)}
        {...props} />
    </TimelineContext>)
  );
}

function TimelineItem({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "li";

  return (
    (<Comp
      data-slot="timeline-item"
      data-orientation={orientation}
      className={cn("flex gap-4", orientation === "horizontal" && "flex-col", className)}
      {...props} />)
  );
}

function TimelineSeparator({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-separator"
      data-orientation={orientation}
      className={cn("flex items-center", orientation === "vertical" && "flex-col", className)}
      {...props} />)
  );
}

function TimelineDot({
  variant = "default",
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-dot"
      data-orientation={orientation}
      className={cn(
        "flex size-4 items-center justify-center empty:after:block empty:after:rounded-full empty:after:outline-current [&_svg:not([class*='size-'])]:size-4",
        orientation === "vertical" && "mt-1",
        variant === "default" && "empty:after:size-2.5 empty:after:bg-current",
        variant === "outline" && "empty:after:size-2 empty:after:outline",
        className
      )}
      {...props} />)
  );
}

function TimelineConnector({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-connector"
      data-orientation={orientation}
      className={cn(
        "bg-border flex-1",
        orientation === "vertical" && "my-2 w-0.5",
        orientation === "horizontal" && "mx-2 h-0.5",
        className
      )}
      {...props} />)
  );
}

function TimelineContent({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-content"
      data-orientation={orientation}
      className={cn(
        "flex-1",
        orientation === "vertical" && "pb-7 first:text-right last:text-left",
        orientation === "horizontal" && "pr-7",
        className
      )}
      {...props} />)
  );
}

function TimelineTitle({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-title"
      data-orientation={orientation}
      className={className}
      {...props} />)
  );
}

function TimelineDescription({
  className,
  asChild,
  ...props
}) {
  const { orientation } = useTimeline();
  const Comp = asChild ? Slot : "div";

  return (
    (<Comp
      data-slot="timeline-description"
      data-orientation={orientation}
      className={cn("text-muted-foreground text-[0.8em]", className)}
      {...props} />)
  );
}

export {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  useTimeline,
};
