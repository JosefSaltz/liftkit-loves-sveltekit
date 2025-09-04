
<script lang="ts">
  let { value, children, onClick, startIcon, endIcon }: LkSelectOptionProps = $props();
  const { selectedValue, setSelectedValue } = useContext(SelectContext);
  const isSelected = selectedValue === value;

  const handleClick = () => {
    setSelectedValue(value);
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };
</script>

<div
  role="menuitem"
  data-lk-component="menu-item"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  data-selected={isSelected}
  style={{
    cursor: "pointer",
    fontWeight: isSelected ? "bold" : "normal",
  }}
  className="select-option"
>
  {startIcon && <Icon {...startIcon} data-lk-icon-position="start"></Icon>}
  <p data-lk-menu-item-element="content-wrap">{children}</p>
  {endIcon && <Icon {...endIcon} data-lk-icon-position="end"></Icon>}
  <StateLayer forcedState={isSelected ? 'active' : undefined}></StateLayer>
</div>
