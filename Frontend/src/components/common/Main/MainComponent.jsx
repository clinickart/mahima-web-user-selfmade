import React, { useState, memo, useCallback } from "react";
import "./MainComponent.css";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";

import { Modal } from "react-bootstrap";
import AsyncSelect from "react-select/async";

export const Filter = ({
  label,
  options = [],
  onChange,
  value,
  containerClassName = "",
  selectClassName = "",
  labelClassName = "",
  disabled = false,
  ...props
}) => {
  return (
    <Form.Group className={`filter-container ${containerClassName}`} {...props}>
      {label && (
        <Form.Label
          htmlFor="filter-select"
          className={`filter-label ${labelClassName}`}
        >
          {label}
        </Form.Label>
      )}
      <Form.Select
        id="filter-select"
        className={`filter-select ${selectClassName}`}
        onChange={onChange}
        value={value}
        disabled={disabled}
      >
        {options.length > 0 ? (
          options.map(({ value, label }, index) => (
            <option key={`${value}-${index}`} value={value}>
              {label}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No options available
          </option>
        )}
      </Form.Select>
    </Form.Group>
  );
};

export const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  containerClassName = "",
  inputClassName = "",
  iconClassName = "",
}) => {
  return (
    <div className={`search-container ${containerClassName}`}>
      <Icon
        icon="mdi:magnify"
        className={`search-icon ${iconClassName}`}
        aria-label="Search"
      />
      <input
        type="text"
        className={`search-input ${inputClassName}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Table = ({
  columns = [],
  data = [],
  className = "",
  onRowClick,
  ...props
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (!column.sortable) return;

    const order =
      sortColumn === column.key && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column.key);
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn] || "";
    const bValue = b[sortColumn] || "";
    return sortOrder === "asc"
      ? aValue.toString().localeCompare(bValue.toString())
      : bValue.toString().localeCompare(aValue.toString());
  });

  return (
    <div className={`table-container ${className}`}>
      <div className="table-responsive">
        <table className="custom-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={`header-${column.key}`}
                  onClick={() => handleSort(column)}
                  className={column.sortable ? "sortable" : ""}
                >
                  {column.label}
                  {column.sortable && sortColumn === column.key && (
                    <Icon
                      icon={
                        sortOrder === "asc"
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      className="sort-icon"
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, rowIndex) => {
                const rowKey = row.id ? `row-${row.id}` : `row-${rowIndex}`;

                return (
                  <tr
                    key={rowKey}
                    onClick={() => onRowClick && onRowClick(row)}
                    className={onRowClick ? "clickable-row" : ""}
                  >
                    {columns.map((column) => {
                      // Generate a unique cell key combining column key and row identifier
                      const cellKey = `cell-${column.key}-${
                        row.id || rowIndex
                      }`;

                      return (
                        <td key={cellKey} data-label={column.key}>
                          {column.render
                            ? column.render(row[column.key], row)
                            : row[column.key] || "-"}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr key="no-data-row">
                <td
                  key="no-data-cell"
                  colSpan={columns.length}
                  className="no-data"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ReusableModal = memo(
  ({
    show,
    onHide,
    title,
    children,
    footer,
    onSubmit,
    centered = true,
    hideFooter = false,
    ...rest
  }) => {
    const handleSubmit = useCallback(
      (e) => {
        e && e.preventDefault();
        if (onSubmit) onSubmit();
      },
      [onSubmit]
    );

    return (
      <Modal show={show} onHide={onHide} centered={centered} {...rest}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
        {!hideFooter && (
          <Modal.Footer>
            {footer ? (
              footer
            ) : (
              <>
                <Button variant="secondary" onClick={onHide}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Save
                </Button>
              </>
            )}
          </Modal.Footer>
        )}
      </Modal>
    );
  }
);

export const FormField = ({
  label,
  name,
  type = "text",
  options = [],
  register,
  required = false,
  error,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  rows = 3,
  ...rest
}) => {
  let inputElement = null;

  switch (type) {
    case "select":
      inputElement = (
        <Form.Select
          className={`profile-form-select ${inputClassName}`}
          {...register(name, { required })}
          {...rest}
        >
          {options.length > 0 ? (
            options.map((option, index) => {
              const value =
                typeof option === "object" && option.value !== undefined
                  ? option.value
                  : option;
              const optionLabel =
                typeof option === "object" && option.label !== undefined
                  ? option.label
                  : option;
              return (
                <option key={index} value={value}>
                  {optionLabel}
                </option>
              );
            })
          ) : (
            <option value="" disabled>
              No options available
            </option>
          )}
        </Form.Select>
      );
      break;
    case "radio":
      inputElement = options.map((option, index) => {
        const value =
          typeof option === "object" && option.value !== undefined
            ? option.value
            : option;
        const optionLabel =
          typeof option === "object" && option.label !== undefined
            ? option.label
            : option;
        return (
          <Form.Check
            key={index}
            type="radio"
            label={optionLabel}
            value={value}
            id={`${name}-${index}`}
            {...register(name, { required })}
            className={`profile-form-radio ${inputClassName}`}
            {...rest}
          />
        );
      });
      break;
    case "checkbox":
      inputElement = (
        <Form.Check
          type="checkbox"
          label={label}
          id={name}
          {...register(name, { required })}
          className={`profile-form-checkbox ${inputClassName}`}
          {...rest}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <Form.Control
          as="textarea"
          rows={rows || 3}
          className={`reusable-form-component ${inputClassName}`}
          {...register(name, { required })}
          {...rest}
        />
      );
      break;
    default:
      inputElement = (
        <Form.Control
          type={type}
          className={`reusable-form-component ${inputClassName}`}
          {...register(name, { required })}
          {...rest}
        />
      );
  }

  return (
    <Form.Group className={`profile-form-group ${containerClassName}`}>
      {/* For checkboxes and radios, label is rendered as part of the input element */}
      {type !== "checkbox" && type !== "radio" && label && (
        <Form.Label className={`profile-form-label ${labelClassName}`}>
          {label}
        </Form.Label>
      )}
      {inputElement}
      {error && (
        <span className="text-danger fs-6">
          {error.message || "This field is required"}
        </span>
      )}
    </Form.Group>
  );
};

export const AsyncDropdown = ({
  loadOptions,
  placeholder = "Select...",
  isMulti = false,
  isClearable = true,
  defaultValue = null,
  onChange,
  styles = {},
  className = "",
  ...restProps
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "38px",
      borderRadius: "6px",
      borderColor: "#ccc",
    }),
    ...styles,
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      isMulti={isMulti}
      isClearable={isClearable}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      styles={customStyles}
      className={className}
      {...restProps}
    />
  );
};
