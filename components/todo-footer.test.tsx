import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoFooter } from "@/components/todo-footer";

describe("TodoFooter", () => {
  it("남은 할 일 개수와 완료 항목 개수를 표시한다", () => {
    render(
      <TodoFooter
        activeCount={3}
        completedCount={2}
        onClearCompleted={vi.fn()}
      />
    );

    expect(screen.getByText("남은 할 일 3개")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "완료 항목 삭제 (2)" })
    ).toBeEnabled();
  });

  it("완료 항목이 없으면 삭제 버튼이 비활성화된다", () => {
    render(
      <TodoFooter
        activeCount={3}
        completedCount={0}
        onClearCompleted={vi.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: "완료 항목 삭제 (0)" })
    ).toBeDisabled();
  });

  it("삭제 버튼을 클릭하면 onClearCompleted를 호출한다", async () => {
    const user = userEvent.setup();
    const onClearCompleted = vi.fn();
    render(
      <TodoFooter
        activeCount={1}
        completedCount={2}
        onClearCompleted={onClearCompleted}
      />
    );

    await user.click(screen.getByRole("button", { name: "완료 항목 삭제 (2)" }));

    expect(onClearCompleted).toHaveBeenCalledOnce();
  });
});
