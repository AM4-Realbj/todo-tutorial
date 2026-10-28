"use client";

import { Button } from "@/components/ui/button";

interface TodoFooterProps {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export function TodoFooter({
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFooterProps) {
  return (
    <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
      <span aria-live="polite">남은 할 일 {activeCount}개</span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        disabled={completedCount === 0}
        onClick={onClearCompleted}
      >
        완료 항목 삭제 ({completedCount})
      </Button>
    </div>
  );
}
